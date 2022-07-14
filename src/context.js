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

  value.addQuantity = (item) => {
    dispatch({type: 'ADD_QUANTITY', payload: {id: item}})
  }

  value.removeQuantity = (item) => {
    dispatch({type: 'REMOVE_QUANTITY', payload: {id: item}})
  }

  value.removeFromBasket = (item) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: item}})
  }

  value.addToBasket = (item) => {
    dispatch({type: 'ADD_TO_BASKET', payload: {id: item}})
  }

  value.handleBasketShow = () => {
    dispatch({type: 'HANDLE_BASKET_SHOW'})
  }

  value.setGoods = (date) => {
    dispatch({type: 'SET_GOODS', payload: date})
  }

  return <ShopContext.Provider value={value}>
    {children}
  </ShopContext.Provider>
}