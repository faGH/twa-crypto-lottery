import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { FlexBoxCol } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { useState } from "react";
import WebApp from "@twa-dev/sdk";

const StyledApp = styled.div`
  @media (prefers-color-scheme: dark) {
  }

  padding: var(--cl-padding) var(--cl-padding);
`;

const AppContainer = styled.div`
  max-width: 900px;
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

const BottomContainer = styled.div`
  color: var(--cl-color-special);
  padding: calc(var(--cl-block-padding)*2);
  background-color: var(--cl-background-color-secondary);
  overflow: auto;
`;

function App() {
  const { connected, getTransactions } = useTonConnect();
  const nextDrawText: string = "0d:0h:14m:19s";
  const potSizeTon: string = (7594280).toLocaleString('en-US');
  const potSizeUsd: string = (1088000).toLocaleString('en-US');
  const [walletTransactions, setTransactions] = useState([]);


  console.log(`Background Color: ${WebApp.backgroundColor}`, WebApp)
  WebApp.showAlert('Alerts work now!', () => console.log('Alert closed now!'))
  //getTransactions("EQDVBOnE8bm6B_CWKwUUZ2NTIt56V6gVdMMDTHiTfjkS0Adj").then(transactions => setTransactions(transactions));

  return (
    <StyledApp className="styled-app">
      <AppContainer className="app-container">
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
        <div hidden={walletTransactions.length <= 0}>
          <div>Transactions</div>
          {
            walletTransactions.map((transaction, ti) => <div>Transaction Here (#{ti})</div>)
          }
        </div>
        <BottomContainer className="flex-1">
          <FlexBoxCol>
            <Counter />
            <TransferTon />
          </FlexBoxCol>
        </BottomContainer>
        <SpecialButtonContainer className="stick-to-bottom">
          BET NOW
        </SpecialButtonContainer>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
