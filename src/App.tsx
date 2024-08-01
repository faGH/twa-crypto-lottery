import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import styled from "styled-components";
import { useTonConnect } from  "./hooks/useTonConnect"
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
    subtitle: "Buy Now!"
  },
  {
    title: "2 TON",
    subtitle: "Buy Now!"
  },
  {
    title: "5 TON",
    subtitle: "Buy Now!"
  },
  {
    title: "10 TON",
    subtitle: "Buy Now!"
  },
  {
    title: "50 TON",
    subtitle: "Buy Now!"
  },
  {
    title: "100 TON",
    subtitle: "Buy Now!"
  }
]

function App(){
  const { connected } = useTonConnect();
  const [nextDrawText, setNextDrawText] = useState("0d:0h:14m:19s");

  return (
    <StyledContainer>
        <WalletConnectHeader title="Next Draw:" subtitle={nextDrawText}></WalletConnectHeader>
        <BannerCarousel items={BannerItems}></BannerCarousel>
        Wallet Connected: {connected.toString()} (TODO: Hide the below when no wallet connected.)
        <MenuViewList purchaseItems={PurchaseOptions}></MenuViewList>
    </StyledContainer>
  )
}

export default App;
