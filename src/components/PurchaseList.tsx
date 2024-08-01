import { PurchaseItemCard } from "./PurchaseItemCard"

export function PurchaseList(props: {
    purchaseItems: Array<{
        title: string,
        subtitle: string
    }>
}){
    return (
        <>
            {props.purchaseItems.map(i =>
                <PurchaseItemCard
                    key={i.title}
                    title={i.title}
                    subtitle={i.subtitle}
                    backgroundImageUrl="purchase_item.png"></PurchaseItemCard>
            )}
        </>
    )
}