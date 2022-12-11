import React, { useEffect, useState } from 'react'

import Countries from './components/Countries';
import './App.css';

const url = 'https://restcountries.com/v3.1/all';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
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
    const filteredCountry = countries.filter((country) => {
      return country.name.common !== name;
    })
    setCountries(filteredCountry);
  }

  return (
    <>
      <h1>Country App</h1>
      {isLoading && <h2>Loading...........</h2>}
      {error && <h4>{error.message}</h4>}

      {/* {console.log(countries.length)} */}

      {
        countries && <Countries countries={countries} onHandleRemoveCountry={handleRemoveCountry} />
      }
    </>
  )
}

export default App