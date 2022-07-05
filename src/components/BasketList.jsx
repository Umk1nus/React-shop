import { BasketItem } from "./BasketItem"

function BasketList(props) {
  
  const {order = []} = props;

  return(
      <ul className="collection basket-list ">
        <li className="collection-item active">Корзина</li>
        {
          order.length ? order.map(item => (
            <BasketItem key={item.id} {...item}/>
          )) : <li className="collection-item">Товаров нет</li>
        }
        <li className="collection-item">Общая стоимость:</li>
      </ul>
  )
}

export {BasketList}