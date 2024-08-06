import { MainViews } from "../enums/MainViews";
import { ICarouselItem } from "./ICarouselItem";
import { IPurchaseItem } from "./IPurchaseItem";
import { IQuery } from "./IQuery";
import { ITransaction } from "./ITransaction";

export interface IState{
    userBalance: number,
    periodStartDate: Date,
    periodEndDate: Date,
    destinationFriendlyWalletAddress: string,
    defaultTransactionComment: string,
    carouselItems: Array<ICarouselItem>,
    carouselInvervalInMs: number,
    purchaseOptions: Array<IPurchaseItem>,
    defaultMainView: MainViews,
    transactionsQuery: IQuery<Array<ITransaction>>,
    enableTonTestNetwork: boolean
}