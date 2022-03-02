import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects'
import { FETCH_USER_SUCCESS, LOGIN_SUCCESS } from "../redux/contants";
import { FETCH_USER, LOGIN } from './../redux/contants';

function* getUser(action) {
    try {
        const response = yield axios.get("http://localhost:3001/users");
        // Sau khi lấy được dữ liệu từ fake API
        // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
        yield put({ type: FETCH_USER_SUCCESS, payload: response.data })
    } catch (error) {
        console.log('error - getUser : ', error);
    }
}
function* authSagaFun(action) {
    const user = action.payload;
    if (user.username === "admin" && user.password === 'letmein') {
        yield put({ type: LOGIN_SUCCESS, payload: user })
        yield put({ type: FETCH_USER, payload: {} })
    }
}

export default function* rootSaga() {
    yield takeLatest(LOGIN, authSagaFun);
    yield takeLatest(FETCH_USER, getUser);
}