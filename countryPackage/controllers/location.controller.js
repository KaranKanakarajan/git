const { Country, State, City } = require("country-state-city");

const getCountries = (req, res) => {
    res.json(Country.getAllCountries());
};

const getStates = (req, res) => {
    const { countryCode } = req.params;
    res.json(State.getStatesOfCountry(countryCode));
};

const getCities = (req, res) => {
    const { countryCode, stateCode } = req.params;
    res.json(City.getCitiesOfState(countryCode, stateCode));
};

module.exports = {
    getCountries,
    getStates,
    getCities,
};