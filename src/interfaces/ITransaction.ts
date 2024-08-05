import { TransactionType } from "../enums/TransactionTypes";

export interface ITransaction{
    sourceAddress: string,
    destinationAddress: string,
    comment: string,
    value: number,
    type: TransactionType
}