import * as actionTypes from '../actions/actionTypes';

const initialState: { counter: number } = {
    counter: 0,
};

const reducer = ( state = initialState, action: {type: string, counter: number} ): object => {
    switch ( action.type ) {
        case actionTypes.COUNTER_START:
            return {
                counter: state.counter - 1 ,
            };
        case actionTypes.COUNTING:
            return {
                counter: state.counter - 1 ,
            };
        case actionTypes.SET_COUNTER:
            return {
                counter: action.counter,
            };
        default:
            return state;
    }
};

export default reducer;