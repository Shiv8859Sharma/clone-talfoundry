import { Country } from 'country-state-city';

const countryList = Country.getAllCountries().map((country, index) => ({ ...country, id: index + 1 }))

export default countryList