import Table from 'react-bootstrap/Table';

export function PayoutsList(props: {
    items: Array<{
        name: string,
        amount: number,
        timestamp: string
    }>
}){
    return (
        <>
            <Table hover>
                <thead>
                    <tr>
                        <th>To</th>
                        <th>Draw</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map(i =>
                        <tr key={`${i.name}_${i.amount}`}>
                            <td>{i.name}</td>
                            <td>{i.amount}</td>
                            <td>{i.timestamp}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    )
}