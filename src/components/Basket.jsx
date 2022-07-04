function Basket(props) {

  const {quantity = 0} = props;

  return (
    <div className="cart red darken-4 white-text">
      <i class="material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-cuantity">{quantity}</span> : null}
    </div>
  )

}

export {Basket};