import { combineReducers, configureStore } from '@reduxjs/toolkit';
import calendarReducer from './reducers/calendarReducer';
import historyReducer from './reducers/historyReducer';

const rootReducer = combineReducers({
    history: historyReducer,
    calendar: calendarReducer
})

const store = configureStore({ reducer: rootReducer })

export default store;