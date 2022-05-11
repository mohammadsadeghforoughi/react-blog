import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import createRootReducer from "../reducers/index";

export const history = createBrowserHistory();

let initialState = {};
const rootReducer = createRootReducer(history);

const store = createStore(
  createRootReducer(history),
  initialState,

  applyMiddleware(routerMiddleware(history))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
