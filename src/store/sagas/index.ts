import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import {
    startCounterSaga,
} from './counter';

export function* watchCounter() {
    yield takeEvery(actionTypes.COUNTER_START, startCounterSaga);
};