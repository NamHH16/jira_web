import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootSaga } from "../redux/sagas/rootSaga";
import createSagaMiddleware from "redux-saga";

const middleWareSaga = createSagaMiddleware();

// compose là func ghép nhiều func làm 1 tham số duy nhất
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, middleWareSaga))
);

middleWareSaga.run(rootSaga);

export default store;
