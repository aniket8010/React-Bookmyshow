import React, { createContext, useReducer } from 'react'
import { initialValue, reducer } from './Reducers'
export const GlobalContext = createContext()

export const Provider = ({children}) => {
  const [values , dispatch]=useReducer(reducer,initialValue)
  return (
    <GlobalContext.Provider value={{values,dispatch}}>{children}</GlobalContext.Provider>
  )
}
