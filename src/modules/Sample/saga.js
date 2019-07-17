import {
    takeLatest, put, call, select,
} from 'redux-saga/effects';

import API from '../../utils/NetworkHandler';

import ActionTypes from './ActionTypes';

function* makeAPICall(action) {
 let response;
 const { payload } = action;
 try {
     response = yield call(API.sendRequest, 'post', '/sample', payload);
     yield put({type: ActionTypes.SHOW_ALERT, payload: {message: 'API Call Success'}});
 } catch(e) {
     yield put({type: ActionTypes.SHOW_ALERT, payload: {message: 'API Call Failed'}});
 }
}

export function* sampleMiddlewares() {
    yield takeLatest(ActionTypes.MAKE_SAMPLE_API_CALL, makeAPICall);
}