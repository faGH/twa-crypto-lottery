import { TonConnectUI } from '@tonconnect/ui';
import { Address, toNano, comment, Sender } from "ton";
import { IState } from "../interfaces/IState";
import { IStateReducerAction } from "../interfaces/IStateReducerAction";
import { StateReducerActionType } from "../enums/StateReducerActionTypes";
import TonWeb from "tonweb";
import { ITransaction } from '../interfaces/ITransaction';
import { TransactionType } from '../enums/TransactionTypes';

export const ProcessTransaction = async (
    tonConnector: TonConnectUI,
    amount: number,
    sender: Sender,
    stateReducer: [IState, (React.Dispatch<IStateReducerAction> | undefined)?]): Promise<void> => {
    const [state, dispatch] = stateReducer;

    if(!tonConnector.connected){
        await tonConnector.connectWallet();
    }

    await sender.send({
        to: Address.parse(state.destinationFriendlyWalletAddress),
        value: toNano(amount),
        body: comment(state.defaultTransactionComment)
    });

    dispatch?.({
        type: StateReducerActionType.AddToBalance,
        value: amount
    });
}

export const GetTransactionsForAddress = async (address: string, useTestNetwork: boolean): Promise<Array<ITransaction>> => {
    const transactionLimit: number = 999;
    const fetchUrl: string = useTestNetwork ?
        `https://testnet.toncenter.com/api/index/getTransactionsByAddress?address=${address}&limit=${transactionLimit}&offset=0&include_msg_body=true` :
        `https://toncenter.com/api/index/getTransactionsByAddress?address=${address}&limit=${transactionLimit}&offset=0&include_msg_body=true`
    const transactionsResponse = await fetch(fetchUrl);
    const transactions: Array<any> = await transactionsResponse.json();
    const nanoTonToTonConversionRate: number = 1000000000;
    const mappedTransactions: Array<ITransaction> = transactions
        .map(t => {
            const in_msg = t.in_msg;

            return {
                amount: in_msg.value / nanoTonToTonConversionRate,
                comment: in_msg.comment,
                destinationAddress: in_msg.destination,
                sourceAddress: in_msg.source,
                timestamp: new Date(t.utime * 1000),
                type: in_msg.source == address ?
                    TransactionType.OutgoingToPlayer :
                    TransactionType.IncomingToMerchant
            };
        })
        .filter(t => t.amount > 0);

    return mappedTransactions;
}

export const GetTransactionsSinceFromTime = (startTime: Date, transactions: Array<ITransaction>): Array<ITransaction> => {
    const recentTransactions: Array<ITransaction> = transactions
        .filter(t => t.timestamp >= startTime);

    return recentTransactions;
}

export const GetAccumAmountOfTransactionsFromTime = (startTime: Date, transactions: Array<ITransaction>): number => {
    const sum: number = GetTransactionsSinceFromTime(startTime, transactions)
        .map(t => t.amount)
        .reduce((l, r) => l + r);

    return sum;
}