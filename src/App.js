import React, { useEffect, useState } from 'react'
import Countries from './components/Countries';

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

  return (
    <>
      <h1>Country App</h1>
      {isLoading && <h2>Loading...........</h2>}
      {error && <h4>{error.message}</h4>}

      {/* {console.log(countries.length)} */}

      {
        countries && <Countries countries={countries} />
      }
    </>
  )
}

export default App