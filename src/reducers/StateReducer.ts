import { StateReducerActionType } from "../enums/StateReducerActionTypes";
import { IState } from "../interfaces/IState";
import { IStateReducerAction } from "../interfaces/IStateReducerAction";

export const StateReducer = (state: IState, action: IStateReducerAction): IState => {
    switch(action.type){
        case StateReducerActionType.SetBalance:
            return { ...state, userBalance: action.value };
        case StateReducerActionType.AddToBalance:
            return { ...state, userBalance: state.userBalance + action.value };
        case StateReducerActionType.SetTransactionsIsLoading:
            return { ...state, transactionsQuery: { ...state.transactionsQuery, isFetching: action.value } };
        case StateReducerActionType.SetTransactionsData:
            return { ...state, transactionsQuery: { ...state.transactionsQuery, data: action.value } };
        case StateReducerActionType.SetJackpotAmount:
            return { ...state, jackpotAmount: action.value };
        case StateReducerActionType.IncrementManualTransactionTriggerCount:
            return { ...state, transactionsQuery: { ...state.transactionsQuery, manualTriggerCount: state.transactionsQuery.manualTriggerCount + action.value } }; 
        default:
            return state;
    }
}