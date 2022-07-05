function BasketItem(props) {

  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype
  } = props

  return(
    <li class="collection-item" id={id}><div>{name} количетсво: {quantity} = {price * quantity} руб<span class="secondary-content" style={{cursor: "pointer"}} onClick={() => removeFromBasket(id)}><i class="material-icons">clear</i></span></div></li>
  )
}

export {BasketItem};