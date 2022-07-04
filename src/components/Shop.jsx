import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config'
import {Preloader} from './Preloader';
import {GoodsList} from './GoodsList';
import {Basket} from './Basket';

function Shop() {

  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([])

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
  goods.splice(100, 10000)
  return (
    <main className="container content">
      <Basket quantity={order.length}/>
      {loading ?  <Preloader/> : <GoodsList goods={goods}/>}
    </main>
  )
}

export {Shop}