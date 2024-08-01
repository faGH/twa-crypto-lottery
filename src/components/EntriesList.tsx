import Table from 'react-bootstrap/Table';

export function EntriesList(props: {
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
                        <th>From</th>
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