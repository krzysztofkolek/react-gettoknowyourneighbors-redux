export default function reducer(state={countrys:[]}, action) {
    console.log('action type' + action.type)
    switch(action.type) {
        case 'FETCH_COUNTRYS': {
            return {...state, 
                    countrys: action.payload.countrys}
        }
        case 'CHANGE_SELECTED_COUNTRY_VALUE': {
            return {...state, 
                    selectedCountryValue: action.payload.selectedCountryValue}
        }
    }
    return state;
}
        