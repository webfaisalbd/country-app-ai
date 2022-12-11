import React from 'react'

import Country from './Country';
import {v4 as uuidv4} from 'uuid'

const Countries = ({ countries }) => {
    return (
        <>
            {
                countries.map((country,id) => {
                    const countryNew = {country, id: uuidv4()}
                    return <Country {...countryNew} key={countryNew.id} />
                })
            }
        </>
    )
}

export default Countries