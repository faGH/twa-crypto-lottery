import { StateReducerActionType } from "../enums/StateReducerActionTypes";

export interface IStateReducerAction{
    type: StateReducerActionType,
    value: any
}