import { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { UserContext } from '../../App';
import { ITransaction } from '../../interfaces/ITransaction';
import { TransactionType } from '../../enums/TransactionTypes';

export function EntriesList(){
    const [state, dispatch] = useContext(UserContext);
    const incomingTransactions: Array<ITransaction> = state
        .destinationWalletTransactions
        .filter(t => t.type == TransactionType.IncomingToMerchant);

    return (
        <>
            {incomingTransactions.length <= 0 ?
                <div>No entries just yet. Be the first!</div> :
                <Table hover>
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>Draw</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {incomingTransactions.map(i =>
                            <tr key={`${i.timestamp}_${i.sourceAddress}`}>
                                <td>{i.sourceAddress}</td>
                                <td>{i.amount}</td>
                                <td>{i.timestamp.toLocaleDateString()}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            }
        </>
    )
}