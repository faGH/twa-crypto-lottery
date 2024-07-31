import styled from "styled-components";
import { useTonConnect } from "../hooks/useTonConnect";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const StyledContainer = styled.div`
    flex: 1;
    background-color: var(--app-background-color-secondary);
    border-radius: var(--app-padding-default);
    padding: var(--app-padding-default);
`

export function MenuViewList(props: {}){
    const { connected, getTransactions } = useTonConnect();

    return (
        <StyledContainer>
            <Tabs defaultActiveKey="connect" className="mb-3" fill>
                <Tab eventKey="connect" title="Bets" className="tab">
                    Wallet Connected: {connected.toString()}
                </Tab>
                <Tab eventKey="entries" title="Entries" className="tab">
                    All the entries for the current period goes here.
                </Tab>
                <Tab eventKey="payouts" title="Payouts" className="tab">
                    All the entries for the current period goes here.
                </Tab>
            </Tabs>
        </StyledContainer>
    )
}