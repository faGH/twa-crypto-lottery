import styled from "styled-components";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { PurchaseList } from './PurchaseList';
import { EntriesList } from "./EntriesList";
import { PayoutsList } from "./PayoutsList";
import { useTonConnect } from  '../hooks/useTonConnect'
import { useState } from "react";

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

export function MenuViewList(props: {
    purchaseItems: Array<{
        title: string,
        subtitle: string,
        amount: number
    }>,
    entriesItems: Array<{
        name: string,
        amount: number,
        timestamp: string
    }>,
    payoutsItems: Array<{
        name: string,
        amount: number,
        timestamp: string
    }>
}){
    const { connected, getTransactions } = useTonConnect();
    const [balance, setBalance] = useState(0)

    return (
        <StyledContainer>
            <BalanceContainer>Your Current Bets: {balance.toLocaleString('en-US')} TON</BalanceContainer>
            <Tabs defaultActiveKey="bets" className="mb-3" fill>
                <Tab eventKey="bets" title="Bets" className="flex">
                    <PurchaseList purchaseItems={props.purchaseItems}></PurchaseList>
                </Tab>
                <Tab eventKey="entries" title="Entries" className="flex">
                    <EntriesList items={props.entriesItems}></EntriesList>
                </Tab>
                <Tab eventKey="payouts" title="Payouts" className="flex">
                    <PayoutsList items={props.payoutsItems}></PayoutsList>
                </Tab>
            </Tabs>
        </StyledContainer>
    )
}