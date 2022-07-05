function BasketItem(props) {

  const {
    id,
    name,
    price,
    quantity
  } = props

  return(
    <li class="collection-item" id={id}><div>{name} количетсво: {quantity} = {price}<span class="secondary-content"><i class="material-icons">clear</i></span></div></li>
  )
}

export {BasketItem};