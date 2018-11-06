import React,{Fragment} from 'react'

const Stock = ({ stock: {name, ticker, price, id}, buyStock, stock }) => (
  <Fragment>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            name
          }</h5>
        <p className="card-text">
            {ticker}: {price}
          </p>
        <button onClick={() => buyStock(stock)} id={id} className="btn btn-primary">Buy Stock</button>
      </div>
    </div>
  </Fragment>
);

export default Stock
