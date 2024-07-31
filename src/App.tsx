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
    subtitle: "Trust every play!",
    backgroundImageUrl: "banner_1.jpg"
  }
]

function App(){
  const [nextDrawText, setNextDrawText] = useState("0d:0h:14m:19s");

  return (
    <StyledContainer>
        <WalletConnectHeader title="Next Draw:" subtitle={nextDrawText}></WalletConnectHeader>
        <BannerCarousel items={BannerItems}></BannerCarousel>
        <MenuViewList></MenuViewList>
    </StyledContainer>
  )
}

export default App;
