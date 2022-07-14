import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {

  const {id, name, price, quantity} = props;

  const {removeFromBasket, removeQuantity, addQuantity} = useContext(ShopContext);

  return(
    <li className="collection-item" id={id}>
      <div>{name} количетсво: 
      <i className="material-icons basket-quantity" onClick={()=> addQuantity(id)}>add</i>
      {quantity}
      <i className="material-icons basket-quantity"  onClick={()=> removeQuantity(id)}>remove</i> = {price * quantity} руб
      <span className="secondary-content" style={{cursor: "pointer"}} onClick={() => removeFromBasket(id)}>
        <i className="material-icons">clear</i>
      </span>
      </div>
    </li>
  )
}

export {BasketItem};