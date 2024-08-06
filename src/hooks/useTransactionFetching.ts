import { useEffect } from "react";
import { IState } from "../interfaces/IState";
import { IStateReducerAction } from "../interfaces/IStateReducerAction";
import { StateReducerActionType } from "../enums/StateReducerActionTypes";
import { GetAccumAmountOfIncomingTransactionsFromTime, GetTransactionsForAddress } from "../utilities/Transactions";
import { ITransaction } from "../interfaces/ITransaction";
import { useTonConnect } from "./useTonConnect";
import { useTonAddress } from "@tonconnect/ui-react";

export const useTransactionsFetching = (stateReducer: [IState, React.Dispatch<IStateReducerAction>]): void => {
    const [state, dispatch] = stateReducer;
    const { wallet_address, wallet, tonConnectUI } = useTonConnect();
    const friendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);

    useEffect(() => {
        if(!wallet_address) return;

        alert(JSON.stringify({
            "wallet address": tonConnectUI?.wallet?.account.address,
            "friendlyAddress": friendlyAddress,
            "rawAddress": rawAddress
        }));
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