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
  font-weight: bold;
`;

const TopContainer = styled.div`
  color: var(--cl-color-special);
  padding: calc(var(--cl-block-padding)*2);
`;

function App() {
  const { network } = useTonConnect();
  const nextDrawText: string = "0d:0h:14m:19s"
  const potSizeTon: string = (7594280).toLocaleString('en-US')
  const potSizeUsd: string = (1088000).toLocaleString('en-US')

  return (
    <StyledApp>
      <AppContainer>
        <HeaderContainer className="pad-block-bottom">
          <div>
            <div className="color-secondary pad-text-right">Next Draw:</div>
            <div>{nextDrawText}</div>
          </div>
          <div className="flex-1"></div>
          <TonConnectButton />
        </HeaderContainer>
        <TopContainer>
          <div className="l-text">Jackpot!</div>
          <div className="xl-text">{potSizeTon}<div className="faded-text pad-text-left inline">TON</div></div>
          <div className="color-primary">{potSizeUsd}<div className="faded-text pad-text-left inline">USD</div></div>
        </TopContainer>
        <FlexBoxCol>
          <Counter />
          <TransferTon />
        </FlexBoxCol>
        <SpecialButtonContainer className="stick-to-bottom">
          BET NOW
        </SpecialButtonContainer>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
