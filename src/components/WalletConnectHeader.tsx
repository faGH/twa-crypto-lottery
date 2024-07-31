import styled from "styled-components";
import { TonConnectButton } from "@tonconnect/ui-react";

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

export function WalletConnectHeader(props: {
    title: string,
    subtitle: string
}){
    return (
        <StyledContainer>
            <div>
                <SecondaryColorDiv>{props.title}</SecondaryColorDiv>
                <div>{props.subtitle}</div>
            </div>
            <FlexSpacer></FlexSpacer>
            <TonConnectButton />
        </StyledContainer>
    )
}