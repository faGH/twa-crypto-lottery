import styled from "styled-components";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { PurchaseList } from './PurchaseList';
import { EntriesList } from "./EntriesList";
import { PayoutsList } from "./PayoutsList";
import { useContext } from "react";
import { UserContext } from "../../App";

const StyledContainer = styled.div`
    flex: 1;
    background-color: var(--app-background-color-secondary);
    border-radius: var(--app-padding-default);
    padding: var(--app-padding-default);
    overflow: auto;
`
const BalanceContainer = styled.div`
    color: var(--app-text-color-secondary);
    padding-bottom: var(--app-padding-default);
`

export function MenuViewList(){
    const [state, dispatch] = useContext(UserContext);

    return (
        <StyledContainer>
            <BalanceContainer>Your Current Bets: {state.userBalance.toLocaleString()} TON</BalanceContainer>
            <Tabs defaultActiveKey="bets" className="mb-3" fill>
                <Tab eventKey="bets" title="Bets" className="flex">
                    <PurchaseList></PurchaseList>
                </Tab>
                <Tab eventKey="entries" title="Entries" className="flex">
                    <EntriesList></EntriesList>
                </Tab>
                <Tab eventKey="payouts" title="Payouts" className="flex">
                    <PayoutsList></PayoutsList>
                </Tab>
            </Tabs>
        </StyledContainer>
    )
}