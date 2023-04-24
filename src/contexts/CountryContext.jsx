import React, { useState } from 'react'

export const CountryContext = React.createContext()

export const CountryProvider = ({children}) => {
    const [country, setCountry] = useState("");

    const value = {
        country,
        setCountry
    }

    return <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
}