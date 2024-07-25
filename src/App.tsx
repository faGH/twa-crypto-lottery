import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { FlexBoxCol } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk";

const StyledApp = styled.div`
  @media (prefers-color-scheme: dark) {
  }

  min-height: 100vh;
  padding: var(--cl-padding) var(--cl-padding);
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
`;

const SpecialButtonContainer = styled.div`
  background-color: var(--cl-color-special);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--cl-text-padding)*3);
`;

function App() {
  const { network } = useTonConnect();
  const nextDrawText: string = "0d:0h:14m:19s"

  return (
    <StyledApp>
      <AppContainer>
        <HeaderContainer className="pad-block-buttom">
          <div>
            <div className="color-secondary pad-text-right">Next Draw:</div>
            <div>{nextDrawText}</div>
          </div>
          <div className="flex-1"></div>
          <TonConnectButton />
        </HeaderContainer>
        <FlexBoxCol>
          <Counter />
          <TransferTon />
        </FlexBoxCol>
        <SpecialButtonContainer className="stick-to-buttom">
          BET NOW
        </SpecialButtonContainer>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
