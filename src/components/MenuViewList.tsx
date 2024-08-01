import styled from "styled-components";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { PurchaseList } from './PurchaseList';
import { useTonConnect } from  '../hooks/useTonConnect'

const StyledContainer = styled.div`
    flex: 1;
    background-color: var(--app-background-color-secondary);
    border-radius: var(--app-padding-default);
    padding: var(--app-padding-default);
    overflow: auto;
`

export function MenuViewList(props: {
    purchaseItems: Array<{
        title: string,
        subtitle: string
    }>
}){
    const { connected } = useTonConnect();

    return (
        <StyledContainer>
            <Tabs defaultActiveKey="bets" className="mb-3" fill>
                <Tab eventKey="bets" title="Bets" className="flex">
                    <PurchaseList purchaseItems={props.purchaseItems}></PurchaseList>
                </Tab>
                <Tab eventKey="entries" title="Entries" className="flex">
                    All the entries for the current period goes here.
                </Tab>
                <Tab eventKey="payouts" title="Payouts" className="flex">
                    All the entries for the current period goes here.
                </Tab>
            </Tabs>
        </StyledContainer>
    )
}