import { useContext } from 'react'
import { ShopContext } from '../context'

function Basket() {

  const {quantity = 0, handleBasketShow = Function.prototype} = useContext(ShopContext);

  return (
    <div className="cart red darken-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-cuantity">{quantity}</span> : null}
    </div>
  )

}

export {Basket};