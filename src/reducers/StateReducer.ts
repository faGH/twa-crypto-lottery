import { StateReducerActionType } from "../enums/StateReducerActionTypes";
import { IState } from "../interfaces/IState";
import { IStateReducerAction } from "../interfaces/IStateReducerAction";

export const StateReducer = (state: IState, action: IStateReducerAction): IState => {
    switch(action.type){
        case StateReducerActionType.SetBalance:
            return { ...state, userBalance: action.value };
        case StateReducerActionType.AddToBalance:
            return { ...state, userBalance: state.userBalance + action.value };
        default:
            return state;
    }
}