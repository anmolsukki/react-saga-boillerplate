import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from "../../Constants/Constant";
import API from '../Services/Service';

async function fetchAsync(func) {
    const response = await func();
    if (response.ok) {
        return await response.json();
    }
    throw new Error("Unexpected error!!!");
}

function* fetchUser() {
    try {
        const users = yield fetchAsync(API.getUsers);
        yield put({type: actionTypes.LOAD_USERS_SUCCESS, data: users});
    }
    catch (e) {
        yield put({type: actionTypes.LOAD_USERS_ERROR, error: e.message});
    }
}

export function* usersSaga() {
    yield takeEvery(actionTypes.LOAD_USERS_LOADING, fetchUser);
}

export default usersSaga;
