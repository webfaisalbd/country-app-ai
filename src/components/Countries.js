import React from 'react'

import Country from './Country';
import style from './Countries.module.css';
import {v4 as uuidv4} from 'uuid';

const Countries = ({ countries }) => {
    return (
        <section className={style.gridLayout}>
            {
                countries.map((country,id) => {
                    const countryNew = {country, id: uuidv4()}
                    return <Country {...countryNew} key={countryNew.id} />
                })
            }
        </section>
    )
}

export default Countries