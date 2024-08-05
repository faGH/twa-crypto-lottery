import { useContext } from "react";
import { PurchaseItemCard } from "../PurchaseItemCard"
import { UserContext } from "../../App";

export function PurchaseList(){
    const [state, dispatch] = useContext(UserContext);

    return (
        <>
            {state.purchaseOptions.map(i =>
                <PurchaseItemCard
                    key={i.title}
                    amount={i.amount}
                    title={i.title}
                    subtitle={i.subtitle}
                    backgroundImageUrl="purchase_item.png"></PurchaseItemCard>
            )}
        </>
    )
}