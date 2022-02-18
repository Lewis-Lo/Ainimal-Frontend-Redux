import { IrrigateActionI, FertilizeActionI, TrimActionI, NextYearActionI } from "../types/tree.type"

export const IrrigateAction = (ml: number): IrrigateActionI => ({
    type: "IRRIGATE",
    payload: ml,
})

export const FertilizeAction = (g: number): FertilizeActionI => ({
    type: "FERTILIZE",
    payload: g,
})

export const TrimAction = (cm: number): TrimActionI => ({
    type: "TRIM",
    payload: cm,
})

export const NextYearAction = (): NextYearActionI => ({
    type: "NEXTYEAR",
    payload: {},
})