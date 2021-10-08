import React from 'react'
import { createContext } from 'react'

export const ProtfolioContexts = createContext()

function PortfolioProvider({children}) {
    const value ={}
    return (
        <ProtfolioContexts.Provider value = {value}>
            {children}
        </ProtfolioContexts.Provider>
    )
}
export default PortfolioProvider