import styled from "styled-components";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { PurchaseList } from './PurchaseList';
import { EntriesList } from "./EntriesList";
import { PayoutsList } from "./PayoutsList";
import { useContext } from "react";
import { UserContext } from "../../App";
import { MainViews } from "../../enums/MainViews";
import { Badge } from "react-bootstrap";
import { ITransaction } from "../../interfaces/ITransaction";
import { TransactionType } from "../../enums/TransactionTypes";
import { GetTransactionsSinceFromTime } from "../../utilities/Transactions";

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
    const incomingTransactions: Array<ITransaction> = state
        .transactionsQuery
        .data
        .filter(t => t.type == TransactionType.IncomingToMerchant);
    const outgoingTransactions: Array<ITransaction> = state
        .transactionsQuery
        .data
        .filter(t => t.type == TransactionType.OutgoingToPlayer);
    const transactionsForCurrentPeriod: Array<ITransaction> = GetTransactionsSinceFromTime(state.periodStartDate, incomingTransactions);

    return (
        <StyledContainer>
            <BalanceContainer>Your Current Bets: {state.userBalance.toLocaleString()} TON</BalanceContainer>
            <Tabs defaultActiveKey={state.defaultMainView} className="mb-3" fill>
                <Tab eventKey={MainViews.Bets} title={
                    <>
                    Bets <Badge bg="secondary">{state.userBalance}</Badge>
                    </>
                } className="flex" >
                    <PurchaseList></PurchaseList>
                </Tab>
                <Tab eventKey={MainViews.Entries} title={
                    <>
                    Entries <Badge bg="secondary">{transactionsForCurrentPeriod.length}</Badge>
                    </>
                } className="flex">
                    <EntriesList></EntriesList>
                </Tab>
                <Tab eventKey={MainViews.Payouts} title={
                    <>
                    Payouts <Badge bg="secondary">{outgoingTransactions.length}</Badge>
                    </>
                } className="flex">
                    <PayoutsList></PayoutsList>
                </Tab>
            </Tabs>
        </StyledContainer>
    )
}