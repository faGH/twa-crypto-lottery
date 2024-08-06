import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import styled from "styled-components";
import React, { useReducer } from "react";
import { WalletConnectHeader } from "./components/header/WalletConnectHeader"
import { MenuViewList } from "./components/view/MenuViewList"
import { InitialState } from "./config";
import { IStateReducerAction } from "./interfaces/IStateReducerAction";
import { IState } from "./interfaces/IState";
import { StateReducer } from "./reducers/StateReducer";
import { BannerCarousel } from "./components/banner/BannersCarousel";
import { useTransactionsFetching } from "./hooks/useTransactionFetching";

const StyledContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: var(--app-text-color-primary);
  background-color: var(--app-background-color-primary);
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: var(--app-padding-default);
`;

export const UserContext = React.createContext<[IState, React.Dispatch<IStateReducerAction>?]>([InitialState,])

function App(){
  const stateReducer = useReducer(StateReducer, InitialState);
  useTransactionsFetching(stateReducer);

  return (
    <UserContext.Provider value={stateReducer}>
      <StyledContainer>
          <WalletConnectHeader></WalletConnectHeader>
          <BannerCarousel></BannerCarousel>
          <MenuViewList></MenuViewList>
      </StyledContainer>
    </UserContext.Provider>
  )
}

export default App;
