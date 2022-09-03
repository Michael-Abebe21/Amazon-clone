import React, { createContext, useContext, useReducer } from "react";

// Prepare the dataLayer
export const StateContext = createContext();

// Wrap our app and prepare the Data layer
export const StateProvider = ({ reducer, initialState, childern }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {childern}
  </StateContext.Provider>
);

// Pull information from the data layer
export const UseStateValue = () => useContext(StateContext);
