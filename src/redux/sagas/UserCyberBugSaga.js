import axios from "axios";
import {
  call,
  delay,
  fork,
  take,
  takeEvery,
  takeLatest,
  put,
} from "redux-saga/effects";
import { USER_SIGNIN_API } from "../../redux/constant/CyberBug";

// Quản lí các action sagâ

function* signinSaga(action) {}

export function* watchSignin() {
  yield takeLatest(USER_SIGNIN_API, signinSaga);
}
