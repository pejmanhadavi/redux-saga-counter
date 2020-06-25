import { put, take, select, call } from "redux-saga/effects";
import { eventChannel, END } from 'redux-saga';
import * as actions from '../actions';


function countdown(secs: number) {
    return eventChannel(emitter => {
        const iv = setInterval(() => {
            secs -= 1;
            if (secs > 0) {
                emitter(secs);
            } else {
                // this causes the channel to close
                emitter(END);
            }
        }, 1000);
        // The subscriber must return an unsubscribe function
        return () => {
            clearInterval(iv);
        };
    }
    );
}

export function* startCounterSaga() {

    const state = yield select();
    const counter = state.counter.counter;
    const chan = yield call(countdown, counter + 1);
    try {
        while (true) {
            let seconds = yield take(chan);
            console.log(seconds);
            yield put(actions.counting());
        }
    } finally {
        console.log('countdown terminated');
    }
}