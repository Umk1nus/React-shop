function GoodsItem(props) {

  const {id, name, description, price } = props;

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
          <button className="btn">Купить</button>
          <span className="right" style={{fontSize: '20px'}}>Цена {price}</span>
        </div>
    </div>
  )
}

export {GoodsItem};