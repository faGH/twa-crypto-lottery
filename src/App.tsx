import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import { WalletConnectHeader } from "./components/WalletConnectHeader"
import { BannerCarousel } from "./components/BannersCarousel"
import { MenuViewList } from "./components/MenuViewList"

const StyledContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: var(--app-text-color-primary);
  background-color: var(--app-background-color-primary);
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: var(--app-padding-default);
`;
const BannerItems = [
  {
    title: "Jackpot!",
    subtitle: (7594280).toLocaleString('en-US') + ' TON',
    backgroundImageUrl: "banner_2.jpeg"
  },
  {
    title: "Provably Fair",
    subtitle: "Trust Every Play!",
    backgroundImageUrl: "banner_1.jpg"
  }
]
const PurchaseOptions = [
  {
    title: "1 TON",
    subtitle: "Buy Now!",
    amount: 1
  },
  {
    title: "2 TON",
    subtitle: "Buy Now!",
    amount: 2
  },
  {
    title: "5 TON",
    subtitle: "Buy Now!",
    amount: 5
  },
  {
    title: "10 TON",
    subtitle: "Buy Now!",
    amount: 10
  },
  {
    title: "50 TON",
    subtitle: "Buy Now!",
    amount: 50
  },
  {
    title: "100 TON",
    subtitle: "Buy Now!",
    amount: 100
  }
]
const EntriesItems = [
  {
    name: 'Jackie Moon',
    amount: 1,
    timestamp: '30.01.24'
  },
  {
    name: 'Mugato',
    amount: 2,
    timestamp: '30.01.23'
  },
  {
    name: 'Chazz Michael Michaels',
    amount: 50,
    timestamp: '30.01.22'
  },
  {
    name: 'Brennan Huff',
    amount: 3,
    timestamp: '30.01.22'
  },
  {
    name: 'Frank Ricard',
    amount: 5,
    timestamp: '30.01.21'
  }
]
const PayoutItems = [
  {
    name: 'Mugato',
    amount: 2,
    timestamp: '30.01.22'
  },
  {
    name: 'Chazz Michael Michaels',
    amount: 50,
    timestamp: '30.01.22'
  }
]

function App(){
  const [nextDrawText, setNextDrawText] = useState("0d:0h:14m:19s");

  return (
    <StyledContainer>
        <WalletConnectHeader title="Next Draw:" subtitle={nextDrawText}></WalletConnectHeader>
        <BannerCarousel items={BannerItems}></BannerCarousel>
        <MenuViewList purchaseItems={PurchaseOptions} entriesItems={EntriesItems} payoutsItems={PayoutItems}></MenuViewList>
    </StyledContainer>
  )
}

export default App;
