import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { UserContext } from '../../App';
import { ITransaction } from '../../interfaces/ITransaction';
import { TransactionType } from '../../enums/TransactionTypes';

export function PayoutsList(){
    const [state, dispatch] = useContext(UserContext);
    const outgoingTransactions: Array<ITransaction> = state
        .transactionsQuery
        .data
        .filter(t => t.type == TransactionType.OutgoingToPlayer);
    const emptyTableBody =  Array
        .from({ length: 3 }, (_, index) => index)
        .map((i) => <tr key={i}>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>);

    return (
        <>
            <Table hover className={outgoingTransactions.length <= 0 ? "empty" : ""}>
                <thead>
                    <tr>
                        <th>To</th>
                        <th>Draw</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {outgoingTransactions.length <= 0 ?
                        emptyTableBody : 
                        outgoingTransactions.map(i =>
                            <tr key={`${i.timestamp}_${i.destinationAddress}`}>
                                <td><div title={i.destinationAddress}>{i.destinationAddress}</div></td>
                                <td>{i.amount}</td>
                                <td>{i.timestamp.toLocaleDateString()}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}