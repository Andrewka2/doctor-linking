import { combineReducers, configureStore } from '@reduxjs/toolkit';
import allUsersReducer from './reducers/allUsersReducer';
import calendarReducer from './reducers/calendarReducer';
import historyReducer from './reducers/historyReducer';
import receptionReducer from './reducers/receptionReducer';
import requestReducer from './reducers/requestReducer';
import scheduleReducer from './reducers/scheduleReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    history: historyReducer,
    calendar: calendarReducer,
    reception: receptionReducer,
    schedule: scheduleReducer,
    user: userReducer,
    users: allUsersReducer,
    requests: requestReducer,
})

const store = configureStore({ reducer: rootReducer })

export default store;