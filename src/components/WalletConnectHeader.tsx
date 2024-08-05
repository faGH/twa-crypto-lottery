import styled from "styled-components";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: var(--app-padding-default);
`;
const SecondaryColorDiv = styled.div`
    color: var(--app-text-color-secondary);
`;
const FlexSpacer = styled.div`
    flex: 1;
`;

function formatTimeDelta(startDate: Date, endDate: Date): string {
    const deltaMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());
    const days = Math.floor(deltaMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((deltaMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((deltaMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((deltaMilliseconds % (1000 * 60)) / 1000);

    return `${days}d:${hours}h:${minutes}m:${seconds}s`;
}

export function WalletConnectHeader(){
    const [nextDrawText, setNextDrawText] = useState("0d:0h:0m:0s");
    const [state, dispatch] = useContext(UserContext);
    useEffect(() => {
        const updateInterval = setInterval(() => {
            const updatedDrawTime: string = formatTimeDelta(new Date(), state.periodEndDate);
            //console.log('Doing things...')
            setNextDrawText(updatedDrawTime);
        }, 1000);

        return () => clearInterval(updateInterval);
    }, [])

    return (
        <StyledContainer>
            <div>
                <SecondaryColorDiv>Next Draw:</SecondaryColorDiv>
                <div>{nextDrawText}</div>
            </div>
            <FlexSpacer></FlexSpacer>
            <TonConnectButton />
        </StyledContainer>
    )
}