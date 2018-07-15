//Action Type Constants
export const TOGGLE_NUMBERS = 'TOGGLE_NUMBERS';
export const LOOKUP_INPUT_CHANGE = 'LOOKUP_INPUT_CHANGE';
export const RESET_INPUT = 'RESET_INPUT';
export const GET_LOOKUP_INFO = 'GET_LOOKUP_INFO';


//Twilio Lookup API url
const twilioUrl = `https://lookups.twilio.com/v1/PhoneNumbers/`

//Action Creator functions, returns action object with type action constant

export function toggleNumbers(){
    return {
        type: TOGGLE_NUMBERS
    }
}

export function updateLookupValue(inputValue){
    if(inputValue.length > 11){
        return{type:"nothing"}
    }
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

export function getLookupValues(lookup_input_value){
    return (
        async function(dispatch){
            const res = await fetch()
        }
    );
}