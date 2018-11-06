import React, { Component, Fragment } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    const { stocks, buyStock } = this.props
    return (
      <Fragment>
        <h2>Stocks</h2>
        {stocks.map(stock => {
          return <Stock key={stock.id} stock={stock} buyStock={buyStock} />
        })
        }
      </Fragment>
    );
  }

}

export default StockContainer;
