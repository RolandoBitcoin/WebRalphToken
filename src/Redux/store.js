import * as reducers from "./";
import { combineReducers, createStore } from 'redux';
export const store = createStore(combineReducers({ ...reducers, }))