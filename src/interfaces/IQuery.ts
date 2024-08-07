export interface IQuery<TDataType>{
    data: TDataType,
    isFetching: boolean,
    refreshIntervalInMs: number,
    manualTriggerCount: number
}