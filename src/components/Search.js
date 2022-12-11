import React, { useEffect, useState } from 'react'

const Search = (props) => {

    const [searchText, setSearchText] = useState('');
   
    const handleChange = (e) => {
        setSearchText(e.target.value);
        // props.onCountrySearch(searchText);
    }

    useEffect(() => {
        props.onCountrySearch(searchText);
      },[searchText]);

   

  return (
    <div style={{textAlign: 'center', margin: "10px"}}>
        <input type="text" placeholder='Search Country' onChange={handleChange} value={searchText} />
    </div>
  )
}

export default Search