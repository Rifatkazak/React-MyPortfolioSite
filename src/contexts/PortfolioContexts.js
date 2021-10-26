import React from 'react'
import { createContext, useState } from 'react'

export const ProtfolioContexts = createContext()

function PortfolioProvider({children}) {
    const initialValue = { name: "Rifat" , contents : "He is a good man" }
    const [ data, setData] = useState([])
    const [comments, setComments] = useState(initialValue)
    const values ={comments, setComments,data , setData}
    return (
        <ProtfolioContexts.Provider value = {values}>
            {children}
        </ProtfolioContexts.Provider>
    )
}
export default PortfolioProvider