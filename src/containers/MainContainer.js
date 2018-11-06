import React, { Component, Fragment } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    filteredStocks: [],
    purchasedStocks: [],
    selectedRadio: ''
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(stocks => this.setState({ 
      stocks,
      filteredStocks: stocks
    }))
  } 

  handleInput = (keyword) => {
    const filter = [...this.state.stocks].filter(stock => {
      return stock.name.toLowerCase().includes(keyword.toLowerCase()) || stock.ticker.toLowerCase().includes(keyword.toLowerCase())
    })
    this.setState({ filteredStocks: filter })
  }

  handleRadio = (event) => {
    if (event.target.value === "Alphabetically") {
      const alpha = [...this.state.filteredStocks].sort(function(a, b) {
        var nameA = a.name.toUpperCase()
        var nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
      this.setState({ filteredStocks: alpha, 
      selectedRadio: event.target.value })
    } else if (event.target.value === "Price") {
        const price = [...this.state.filteredStocks].sort(function(a, b) {
          return a.price - b.price
      })
      this.setState({ filteredStocks: price,
      selectedRadio: event.target.value })
    }
  }

  handleSelect = (selection) => {
    const stocks = [...this.state.stocks]
    switch (selection) {
      case 'Sportswear':
        this.setState({ filteredStocks: stocks.filter(s => s.type === 'Sportswear') })
        break
      case 'Tech':
        this.setState({ filteredStocks: stocks.filter(s => s.type === 'Tech') })
        break
      case 'Finance':
        this.setState({ filteredStocks: stocks.filter(s => s.type === 'Finance') })
        break
      default:
        alert('Please try another selection.')
    }
  }

  buyStock = (stock) => {
    if ([...this.state.purchasedStocks].find(s => s.id === stock.id) === undefined) {
      this.setState({ purchasedStocks: [...this.state.purchasedStocks, stock] })
    } else {
      alert('Already in portfolio.')
    }
  }

  render() {
    const { purchasedStocks, filteredStocks } = this.state
    return (
      <Fragment>
        <SearchBar handleInput={this.handleInput} handleRadio={this.handleRadio} selectedRadio={this.state.selectedRadio} handleSelect={this.handleSelect} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={filteredStocks} buyStock={this.buyStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer purchasedStocks={purchasedStocks} />

            </div>
          </div>
      </Fragment>
    );
  }
}

export default MainContainer;
