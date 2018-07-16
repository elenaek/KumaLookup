//Import Env Variables
import {twilUSER,twilPW} from 'react-native-dotenv';
import base64 from 'base-64';

//Action Type Constants
export const TOGGLE_RESULTS = 'TOGGLE_RESULTS';
export const LOOKUP_INPUT_CHANGE = 'LOOKUP_INPUT_CHANGE';
export const RESET_INPUT = 'RESET_INPUT';
export const GET_LOOKUP_INFO = 'GET_LOOKUP_INFO';




//Action Creator functions, returns action object with type action constant

export function toggleResults(){
    return {
        type: TOGGLE_RESULTS
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

export function getLookupInfo(lookup_input_value){
    return (async function(dispatch){
            const base64EncodedAuth = base64.encode(`${twilUSER}:${twilPW}`);
            const twilioUrl = `https://lookups.twilio.com/v1/PhoneNumbers/${lookup_input_value}?Type=carrier&Type=caller-name`;
            const requestOptions = {
                method: "GET",
                headers:{
                    Authorization: `Basic ${base64EncodedAuth}`
                }
            }
            const res = await fetch(twilioUrl, requestOptions);
            const lookupRes = await res.json();
            console.log(lookupRes);
            return dispatch({
                type: GET_LOOKUP_INFO,
                lookup_info: lookupRes
            }); 
    });
}