import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchCounter } from './sagas/index';
import { counterReducer } from './reducers';


const rootReducer = combineReducers({
    counter: counterReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchCounter);


export default store;

export interface RootState {
    counter: number,
};