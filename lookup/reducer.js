import {LOOKUP_INPUT_CHANGE,TOGGLE_NUMBERS, RESET_INPUT} from './actions';

const initialState = {
    numbersVisibility: false,
    lookup_input_value: '',
    lookup_info: {}
};


//Reducer
export default function(state = initialState, action){
    const { type, lookup_input_value, lookup_info } = action;
    switch(type){
        case TOGGLE_NUMBERS:
            return {...state,numbersVisibility: !state.numbersVisibility};
        case LOOKUP_INPUT_CHANGE:
            console.log("hit input change");
            return {...state, lookup_input_value };
        case RESET_INPUT:
            return{...state, lookup_input_value: ''};
        default:
            console.log(LOOKUP_INPUT_CHANGE);
            return state;
    }
}