import {LOOKUP_INPUT_CHANGE,TOGGLE_RESULTS, RESET_INPUT, GET_LOOKUP_INFO} from './actions';

const initialState = {
    resultsVisibility: false,
    lookup_input_value: '',
    lookup_info: {}
};


//Reducer
export default function(state = initialState, action){
    const { type, lookup_input_value, lookup_info } = action;
    switch(type){
        case TOGGLE_RESULTS:
            return {...state,resultsVisibility: !state.resultsVisibility};
        case LOOKUP_INPUT_CHANGE:
            return {...state, lookup_input_value };
        case RESET_INPUT:
            return{...state, lookup_input_value: ''};
        case GET_LOOKUP_INFO:
            return {...state, lookup_info}
        default:
            return state;
    }
}