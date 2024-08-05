import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { UserContext } from '../../App';
import { ITransaction } from '../../interfaces/ITransaction';
import { TransactionType } from '../../enums/TransactionTypes';

export function PayoutsList(){
    const [state, dispatch] = useContext(UserContext);
    const outgoingTransactions: Array<ITransaction> = state
        .destinationWalletTransactions
        .filter(t => t.type == TransactionType.OutgoingToPlayer);

    return (
        <>
            {outgoingTransactions.length <= 0 ?
                <div>Loading...</div> :
                <Table hover>
                    <thead>
                        <tr>
                            <th>To</th>
                            <th>Draw</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {outgoingTransactions.map(i =>
                            <tr key={`${i.timestamp}_${i.destinationAddress}`}>
                                <td>{i.destinationAddress}</td>
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