import { ShopContext } from "../context";
import { useContext } from "react";

function GoodsItem(props) {

  const {id, name, description, price} = props;

  const {addToBasket} = useContext(ShopContext)

  return(
    <div className="card" id={id}>
      <div className="card-image">
        <img src={props.images.background} alt={name}/>
        <span className="card-title">{name}</span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
          <button className="btn red darken-4" onClick={() => addToBasket({
            id,
            name,
            price,
          })}>Купить</button>
          <span className="right" style={{fontSize: '20px'}}>Цена {price}</span>
        </div>
    </div>
  )
}

export {GoodsItem};