import React, { useEffect, useState } from 'react'

import Countries from './components/Countries';
import './App.css';
import Search from './components/Search';

const url = 'https://restcountries.com/v3.1/all';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState(countries);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterCountry(data);
      setIsLoading(false);
      setError(null);
    }
    catch (e) {
      setError(e);
      setIsLoading(false)
    }
  }

  useEffect(() => {

    fetchData(url);

  }, [])

  const handleRemoveCountry = (name) => {
    const filteredCountry = filterCountry.filter((country) => {
      return country.name.common !== name;
    })
    setFilterCountry(filteredCountry);
  }

  const countrySearch = (searchText) => {
    let mySearch = searchText.toLowerCase();
    let searchResult = countries.filter((country)=> {
      let value = country.name.common.toLowerCase();
      return value.startsWith(mySearch);
    })
    setFilterCountry(searchResult);
  }

  return (
    <>
      <h1>Country App</h1>

      <Search onCountrySearch={countrySearch} />

      {isLoading && <h2>Loading...........</h2>}
      {error && <h4>{error.message}</h4>}

      {/* {console.log(countries.length)} */}

      {
        filterCountry && <Countries countries={filterCountry} onHandleRemoveCountry={handleRemoveCountry} />
      }
    </>
  )
}

export default App