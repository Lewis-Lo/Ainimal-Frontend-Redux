import { createStore, combineReducers } from "redux";
import treeReducer from './reducers/tree.reducer';

const rootReducer = combineReducers({
  treeReducer,
});

const store = createStore(
  rootReducer,
);

export type storeTypes = ReturnType<typeof rootReducer>;

export default store;