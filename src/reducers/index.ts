import { combineReducers } from "redux";
import  communitiesReducer  from './communitiesReducer';
import homesReducer from './homesReducer';



const rootReducers = combineReducers({
    communitiesList:communitiesReducer,
    homesList:homesReducer
})

export type RootState = ReturnType<typeof rootReducers>

export default rootReducers;