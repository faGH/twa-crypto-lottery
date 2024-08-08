import { useEffect } from "react";
import { IState } from "../interfaces/IState";
import { IStateReducerAction } from "../interfaces/IStateReducerAction";
import { StateReducerActionType } from "../enums/StateReducerActionTypes";
import { GetAccumAmountOfIncomingTransactionsFromTime, GetAccumAmountOfIncomingTransactionsFromTimeWithAddress, GetTransactionsForAddress } from "../utilities/Transactions";
import { ITransaction } from "../interfaces/ITransaction";
import { useTonAddress } from "@tonconnect/ui-react";

export const useTransactionsFetching = (stateReducer: [IState, React.Dispatch<IStateReducerAction>]): void => {
    const [state, dispatch] = stateReducer;
    const friendlyAddress = useTonAddress();

    useEffect(() => {
        const userBetsForCurrentPeriod: number = GetAccumAmountOfIncomingTransactionsFromTimeWithAddress(state.periodStartDate, state.transactionsQuery.data, friendlyAddress);

        dispatch({
            type: StateReducerActionType.SetBalance,
            value: userBetsForCurrentPeriod
        });
    }, [friendlyAddress, state.transactionsQuery.data.length]);

    useEffect(() => {
        dispatch({
            type: StateReducerActionType.SetTransactionsIsLoading,
            value: true
        });

        GetTransactionsForAddress(state.merchantWalletAddress, state.enableTonTestNetwork)
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
    }, [state.transactionsQuery.manualTriggerCount])
}