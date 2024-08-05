import { ITransaction } from "./ITransaction";

export interface IState{
    userBalance: number,
    periodStartDate: Date,
    periodEndDate: Date,
    destinationWalletAddress: string,
    destinationWalletTransactions: Array<ITransaction>,
    defaultTransactionComment: string
}