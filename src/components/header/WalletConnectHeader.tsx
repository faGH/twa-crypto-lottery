import styled from "styled-components";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { FormatTimeDelta } from "../../utilities/DateTime";

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

export function WalletConnectHeader(){
    const [nextDrawText, setNextDrawText] = useState("...");
    const [state, dispatch] = useContext(UserContext);

    useEffect(() => {
        const updateInterval = setInterval(() => {
            setNextDrawText(FormatTimeDelta(new Date(), state.periodEndDate));
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