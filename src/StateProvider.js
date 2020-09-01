// setup Data layer
// we need this to track the basket


import React, { createContext, useContext, useReducer } from 'react'

// this is a data layer
export const StateContext = createContext();

// Build a provider 
export const StateProvider = ({ reducer, initialState, children }) => (
    < StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider >
);

// This is how we use it inside of an component
export const useStateValue = () => useContext(StateContext);

// export default StateProvider
