import { MainViews } from "../enums/MainViews";
import { IPurchaseItem } from "./IPurchaseItem";
import { IQuery } from "./IQuery";
import { ITransaction } from "./ITransaction";

export interface IState{
    userBalance: number,
    periodStartDate: Date,
    periodEndDate: Date,
    destinationFriendlyWalletAddress: string,
    defaultTransactionComment: string,
    carouselInvervalInMs: number,
    purchaseOptions: Array<IPurchaseItem>,
    defaultMainView: MainViews,
    transactionsQuery: IQuery<Array<ITransaction>>,
    enableTonTestNetwork: boolean,
    jackpotAmount: number
}