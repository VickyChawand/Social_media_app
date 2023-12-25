import { createStore, combineReducers } from 'redux';
import {appReducer} from './reducer';

const reducer=combineReducers({
  app: appReducer,
})
const initialState={};
// Create Redux store
const store = createStore(reducer, initialState);

export default store;
