import {useEffect, useContext} from 'react';
import {API_KEY, API_URL} from '../config'
import { ShopContext } from '../context';
import {Preloader} from './Preloader';
import {GoodsList} from './GoodsList';
import {Basket} from './Basket';
import { BasketList } from './BasketList';

function Shop() {

  const {goods, loading, order, isBasketShow, setGoods} = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { 
        'Authorization' : API_KEY
      }
    }).then((response) => response.json())
    .then((data)=> {
      setGoods(data.items);
    })

  }, []);
  goods.splice(100, 11000)
  return (
    <main className="container content">
      <Basket quantity={order.length} order={order}/>
      {loading ?  <Preloader/> : <GoodsList/>}
      {
        isBasketShow && <BasketList order={order} />
      }
    </main>
  )
}

export {Shop}