import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { UserContext } from '../../App';
import { ITransaction } from '../../interfaces/ITransaction';
import { TransactionType } from '../../enums/TransactionTypes';
import { GetTransactionsSinceFromTime } from '../../utilities/Transactions';

export function EntriesList(){
    const [state, dispatch] = useContext(UserContext);
    const incomingTransactions: Array<ITransaction> = state
        .transactionsQuery
        .data
        .filter(t => t.type == TransactionType.IncomingToMerchant);
    const transactionsForCurrentPeriod: Array<ITransaction> = GetTransactionsSinceFromTime(state.periodStartDate, incomingTransactions);
    const emptyTableBody =  Array
        .from({ length: 3 }, (_, index) => index)
        .map((i) => <tr key={i}>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>);

    return (
        <>
            <Table hover className={incomingTransactions.length <= 0 ? "empty" : ""}>
                <thead>
                    <tr>
                        <th>From</th>
                        <th>Draw</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsForCurrentPeriod.length <= 0 ?
                        emptyTableBody : 
                        transactionsForCurrentPeriod.map(i =>
                            <tr key={`${i.timestamp}_${i.sourceAddress}`}>
                                <td><div title={i.sourceAddress}>{i.sourceAddress}</div></td>
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