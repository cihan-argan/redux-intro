import * as actionTypes from "./actionTypes"

export const increaseCounter = () => ({
    type:actionTypes.INCREASE_COUNTER,
    payload:1
})

export const decreaseCounter =()=>({
    types:actionTypes.DECREASE_COUNTER,
    payload:1
})

export const increaseByTwoCounter = () =>({
    types:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2
})
