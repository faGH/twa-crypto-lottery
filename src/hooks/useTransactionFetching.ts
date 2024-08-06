import { useEffect } from "react";
import { IState } from "../interfaces/IState";
import { IStateReducerAction } from "../interfaces/IStateReducerAction";
import { StateReducerActionType } from "../enums/StateReducerActionTypes";
import { GetAccumAmountOfIncomingTransactionsFromTime, GetTransactionsForAddress } from "../utilities/Transactions";
import { ITransaction } from "../interfaces/ITransaction";
import { useTonConnect } from "./useTonConnect";

export const useTransactionsFetching = (stateReducer: [IState, React.Dispatch<IStateReducerAction>]): void => {
    const [state, dispatch] = stateReducer;
    const { wallet_address } = useTonConnect();

    useEffect(() => {
        if(!wallet_address) return;

        alert(`Wallet Address: ${wallet_address}`);
    }, [wallet_address]);

    useEffect(() => {
        dispatch({
            type: StateReducerActionType.SetTransactionsIsLoading,
            value: true
        });

        GetTransactionsForAddress(state.destinationFriendlyWalletAddress, state.enableTonTestNetwork)
            .then((transactions: Array<ITransaction>) => {
                dispatch({
                    type: StateReducerActionType.SetTransactionsData,
                    value: transactions
                });
                dispatch({
                    type: StateReducerActionType.SetJackpotAmount,
                    value: GetAccumAmountOfIncomingTransactionsFromTime(state.periodStartDate, transactions)
                });
            })
            .catch(console.error)
            .finally(() => {
                dispatch({
                    type: StateReducerActionType.SetTransactionsIsLoading,
                    value: false
                });
            });
    }, [])
}