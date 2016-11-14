export default function reducer(state={
                    name: '',
                    code: '',
                    capital: '',
                    region: '',
                    subRegion: '',
                    translations: [],
                    population: 0,
                    area: 0,
                    timezones: [],
                    borders: [],
                    nativeName: '',
                    currencies: [],
                    languages: [],
                    loading: {
                        isLoading: false,
                        isError: false,
                        errorMsg: ''               
                    }
        }, action) {
            console.log(action.type)
            switch(action.type) {
                case "FETCH_COUNTRYINFORMATION": {
                    return {...state,               
                            loading: {
                                isLoading: true,
                                isError: false,
                                errorMsg: ''
                            }                
                    };
                }
                case "FETCH_COUNTRYINFORMATION_REJECTED": {
                    return {
                        ...state, 
                                name: '',
                                code: '',
                                capital: '',
                                region: '',
                                subRegion: '',
                                translations: [],
                                population: 0,
                                area: 0,
                                timezones: [],
                                borders: [],
                                nativeName: '',
                                currencies: [],
                                languages: [],
                            loading: {
                                isLoading: false,
                                isError: true,
                                errorMsg: action.payload.message
                            }
                        
                    };
                }
                case "FETCH_COUNTRYINFORMATION_FULFILLED": {
                    let translations = Object.keys(action.payload.translations).map(function (key) { return action.payload.translations[key]; });
                    return {...state,  
                                name: action.payload.name,
                                code: action.payload.alpha2Code,
                                capital: action.payload.capital,
                                region: action.payload.region,
                                subRegion: action.payload.subregion,
                                translations: translations,
                                population: action.payload.population,
                                area: action.payload.area,
                                timezones: action.payload.timezones.map(function(item){ return item; }),
                                borders: action.payload.borders.map(function(item){ return item; }),
                                nativeName: action.payload.nativeName,
                                currencies: action.payload.currencies.map(function(item){ return item; }),
                                languages: action.payload.languages
                            ,
                            loading: {
                                isLoading: false,
                                isError: false,
                                errorMsg: ''
                            }
                        
                    };
                
            }
        }
        return state;
}
        