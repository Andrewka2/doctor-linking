import { combineReducers, configureStore } from '@reduxjs/toolkit';
import calendarReducer from './reducers/calendarReducer';
import historyReducer from './reducers/historyReducer';
import receptionReducer from './reducers/receptionReducer';
import scheduleReducer from './reducers/scheduleReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    history: historyReducer,
    calendar: calendarReducer,
    reception: receptionReducer,
    schedule: scheduleReducer,
    user: userReducer
})

const store = configureStore({ reducer: rootReducer })

export default store;