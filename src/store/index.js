import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { fork, all } from 'redux-saga/effects';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';




// import all reducers
import SampleReducer from '../modules/Sample/reducer';

// import all sagas

import * as SampleSaga from '../modules/Sample/saga';


const storeMiddleWares = [];
storeMiddleWares.push(logger);


const allReducers = combineReducers({
    sample: SampleReducer
});

const allSagas = function* rootSaga() {
    yield all(
        [
            ...Object.values(SampleSaga)
        ].map(fork)
    );
};

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, allReducers);


const configureStore = () => {
    // Saga MiddleWare
    const sagaMiddleware = createSagaMiddleware();
    storeMiddleWares.push(sagaMiddleware);

    // Apply all middleWares to Redux Store
    const allMiddleWares = applyMiddleware(...storeMiddleWares);

    // creating a store with reducers and middleWares
    const store = createStore(persistedReducer, allMiddleWares);
    const persiststore = persistStore(store);

    // Running all Worker Sagas
    sagaMiddleware.run(allSagas);

    return { store, persiststore };
};

export default configureStore;
