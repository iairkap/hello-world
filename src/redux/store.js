import reducer from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer);

export default store;
