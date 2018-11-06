import React, { Component, Fragment } from 'react';
import PortfolioStock from '../components/PortfolioStock'
class PortfolioContainer extends Component {

  render() {
    const { purchasedStocks } = this.props
    return (
      <Fragment>
        <ul className="list-group">
          <h2>My Portfolio</h2>
          {purchasedStocks.map(ps => {
            return <PortfolioStock key={ps.id} purchasedStock={ps} />
          })
          }
        </ul>
      </Fragment>
    );
  }

}

export default PortfolioContainer;
