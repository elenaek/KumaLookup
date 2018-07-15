import { combineReducers } from 'redux';
//combines all your reducers into one

//import the message reducer to add into the root reducer
import lookup from './lookup/reducer.js';



//Takes a bunch of reducers and merge them into one
const rootReducer = combineReducers({
    lookup
});


export default rootReducer;