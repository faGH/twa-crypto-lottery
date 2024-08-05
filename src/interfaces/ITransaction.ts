import { TransactionType } from "../enums/TransactionTypes";

export interface ITransaction{
    sourceAddress: string,
    destinationAddress: string,
    comment: string,
    amount: number,
    type: TransactionType,
    timestamp: Date
}