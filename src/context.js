import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
}

export const ContextProvider = ({children}) => {

  const [value, dispatch] = useReducer(reducer, initialState)

  value.removeFromBasket = (item) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: item}})
  }

  return <ShopContext.Provider value={value}>
    {children}
  </ShopContext.Provider>
}