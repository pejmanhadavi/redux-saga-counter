import * as actionTypes from './actionTypes';

export const counterStart = (): { type: string } => {
    return {
        type: actionTypes.COUNTER_START,
    };
};

export const counting = (): { type: string } => {
    return {
        type: actionTypes.COUNTING,
    };
};

export const setCounter = (counter: number): { type: string, counter: number } => {
    return {
        type: actionTypes.SET_COUNTER,
        counter,
    };
};