/* 定義data的type */
export interface TreeModel {
    Name: string,
    Age: number,
    height: number,
}

/* 定義action的type */
export interface IrrigateActionI {
    readonly type: "IRRIGATE",
    payload: number,
}

export interface FertilizeActionI {
    readonly type: "FERTILIZE",
    payload: number,
}

export interface TrimActionI {
    readonly type: "TRIM",
    payload: number,
}

export interface NextYearActionI {
    readonly type: "NEXTYEAR",
    payload: {},
}

export type TreeActionType = 
    | IrrigateActionI
    | FertilizeActionI
    | TrimActionI
    | NextYearActionI;