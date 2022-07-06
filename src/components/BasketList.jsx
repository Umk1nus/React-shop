import { BasketItem } from "./BasketItem"

function BasketList(props) {
  
  const {order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    removeQuantity = Function.prototype,
    addQuantity = Function.prototype
    } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return(
      <ul className="collection basket-list" >
        <li className="collection-item active">Корзина <span className="secondary-content"><i className="material-icons" onClick={handleBasketShow} style={{cursor: "pointer"}}>clear</i></span></li>
        {
          order.length ? order.map(item => (
            <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} addQuantity={addQuantity} removeQuantity={removeQuantity}/>
          )) : <li className="collection-item">Товаров нет</li>
        }
        <li className="collection-item">Общая стоимость: {totalPrice} руб</li>
      </ul>
  )
}

export {BasketList}