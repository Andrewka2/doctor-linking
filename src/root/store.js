import { combineReducers, configureStore } from '@reduxjs/toolkit';
import historyReducer from './reducers/historyReducer';

const rootReducer = combineReducers({
    history: historyReducer
})

const store = configureStore({ reducer: rootReducer })

export default store;