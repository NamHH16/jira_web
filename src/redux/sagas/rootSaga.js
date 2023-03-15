import { all } from "redux-saga/effects";
import * as CyberBug from "./UserCyberBugSaga";

export function* rootSaga() {
  // console.log("rootSaga");
  yield all([CyberBug.watchSignin()]);
}
