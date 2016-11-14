import { combineReducers } from "redux"

import Country from "./CountryReducer" 
import CountrySelect from "./CountrySelectReducer" 


export default combineReducers({
  country: Country,
  countrySelect: CountrySelect
})