import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config'
import {Preloader} from './Preloader';
import {GoodsList} from './GoodsList';
import {Basket} from './Basket';
import { BasketList } from './BasketList';

function Shop() {

  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false)

  const addQuantity = (item) => {
    const newOrder = order.map(el => {
      if (el.id === item) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        }
      } else return el;
    })
    setOrder(newOrder);
  }

  const removeQuantity = (item) => {
    const newOrder = order.map(el => {
      if (el.id === item) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        }
      } else return el;
    })
    setOrder(newOrder);
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  }

  const addToBasket = (item) => {

    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem,index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem;
        }
      })
      setOrder(newOrder);
    }
  }

  const removeFromBasket = (item) => {
    const newOrder = order.filter(el => el.id !== item);
    setOrder(newOrder);
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { 
        'Authorization' : API_KEY
      }
    }).then((response) => response.json())
    .then((data)=> {
      data.items && setGoods(data.items);
      setLoading(false);
    })
  }, []);
  goods.splice(100, 11000)
  return (
    <main className="container content">
      <Basket quantity={order.length} handleBasketShow={handleBasketShow}/>
      {loading ?  <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
      {
        isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} addQuantity={addQuantity} removeQuantity={removeQuantity}/>
      }
    </main>
  )
}

export {Shop}