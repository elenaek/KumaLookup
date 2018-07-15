//Action Type Constants
export const TOGGLE_NUMBERS = 'TOGGLE_NUMBERS';
export const LOOKUP_INPUT_CHANGE = 'LOOKUP_INPUT_CHANGE';
export const RESET_INPUT = 'RESET_INPUT';


//Action Creator functions, returns action object with type action constant

export function toggleNumbers(){
    return {
        type: TOGGLE_NUMBERS
    }
}

export function updateLookupValue(inputValue){
    return {
        type: LOOKUP_INPUT_CHANGE,
        lookup_input_value: inputValue
    }
}

export function resetLookupValue(){
    return {
        type: RESET_INPUT
    }
}