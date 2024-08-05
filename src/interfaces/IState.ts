import { ICarouselItem } from "./ICarouselItem";
import { IPurchaseItem } from "./IPurchaseItem";
import { ITransaction } from "./ITransaction";

export interface IState{
    userBalance: number,
    periodStartDate: Date,
    periodEndDate: Date,
    destinationWalletAddress: string,
    destinationWalletTransactions: Array<ITransaction>,
    defaultTransactionComment: string,
    carouselItems: Array<ICarouselItem>,
    carouselInvervalInMs: number,
    purchaseOptions: Array<IPurchaseItem>,
    transactionRefetchIntervalInMs: number
}