import { useEffect } from "react";
import { IState } from "../interfaces/IState";
import { IStateReducerAction } from "../interfaces/IStateReducerAction";
import { StateReducerActionType } from "../enums/StateReducerActionTypes";
import { GetTransactionsForAddress } from "../utilities/Transactions";
import { ITransaction } from "../interfaces/ITransaction";

export const useTransactionsFetching = (stateReducer: [IState, React.Dispatch<IStateReducerAction>]): void => {
    const [state, dispatch] = stateReducer;

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