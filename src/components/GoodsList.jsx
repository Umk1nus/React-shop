import { GoodsItem } from './GoodsItem'

function GoodsList(props) {
  const {goods = [], addToBasket = Function.prototype} = props
  
  if (!goods.length) {
    return <h3>Nothing</h3>
  }
  return (
    <div className="goods">
      {goods.map(good => (
        <GoodsItem key={good.id} {...good} addToBasket={addToBasket}/>
      ))}
    </div>
  )
}

export {GoodsList};