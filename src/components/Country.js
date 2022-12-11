import React from 'react'

import style from './Country.module.css'

const Country = ({ country }) => {
    const { name, flags, capital, population, area } = country;
    return (
        <article className={style.cardDesign}>
            <div>
                <div className={style.imgDiv}>
                    <img className={style.imgDesign} src={flags.png} alt={name.common} />
                </div>
                <div className={style.countryDetails}>
                    <h3>Name: {name.common}</h3>
                    <h3>Population: {population}</h3>
                    <h3>Capital: {capital}</h3>
                    <h3>Area: {area}</h3>
                </div>
            </div>
        </article>
    )
}

export default Country