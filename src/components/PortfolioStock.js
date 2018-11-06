import React,{Fragment} from 'react'

const Stock = ({ purchasedStock: {ticker, price} }) => (
  <Fragment>
    <li className="list-group-item">
      {ticker}: {price}
    </li>
  </Fragment>
);

export default Stock
