import React from 'react';
import { useState } from 'react';
import { AppWrapper } from './App.styles';

function App() {

  const numMapping = {
    'January': 1,
    'February' : 2,
    'March': 3,
    'April': 4,
    'May': 5,
    'June': 6
  }

  const [profit, setProfit] = useState("");
  const [startDate, setStartDate] = useState('');
  const [stockSelected, setStockSelected] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleCalculateProfitClick = () => {
    setProfit((stocksInformation[stockSelected].prices[numMapping[endDate]-1] - stocksInformation[stockSelected].prices[numMapping[startDate]-1]) * stocksInformation[stockSelected].numOfStocks)
  }

  const handleStartChange = (event, type) => {
    setStartDate(event.target.value);
  };

  const handleEndChange = (event) => {
    if(numMapping[event.target.value]<=numMapping[startDate]){
      alert('End date must be after start date')
    }
    else{
      setEndDate(event.target.value);
    }
  }

  const stocksInformation = {
    'Apple': {
      prices: [20, 21, 22, 20, 19, 18],
      numOfStocks: 293
    },
    'Google':{
      prices: [40, 42, 30, 31, 32, 45],
      numOfStocks: 40
    },
    'IBM': {
      prices: [30, 10, 20, 33, 44, 23],
      numOfStocks: 120
    }
  }

  return (
    <AppWrapper>
      <div className="stocks">
        <h1>Stock Prices</h1>
        <table>
          <thead>
            <tr>
              <th className="stock-header">Stock</th>
              <th className='month-header'>Monthly Prices</th>
              <th className="num-stocks-header">Number of stocks</th>
            </tr>
          </thead>
          <tbody>
            {['Apple', 'Google', 'IBM'].map((stock, i) => (
              <tr key={i}>
                <td className="stock-col">{stock}</td>
                <table className="prices-table">
                      <div className="month-and-price">
                        {['January', 'February', 'March','April','May','June'].map((monthName) => {
                          return(
                            <div className="container"><div className='item'>
                              {monthName}
                            </div>
                            <div className="price">
                              ${stocksInformation[stock].prices[numMapping[monthName]-1]}
                             </div></div>
                          )
                        })}
                      </div>
                </table>
                <td className='num-stocks-col'>{stocksInformation[stock].numOfStocks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dates-selector">
        <h1>Select a stock</h1>
        <div className="select-stock-col">
          <select value={stockSelected} onChange={(e) => setStockSelected(e.target.value)}>
              <option value="" disabled>Select a stock</option>
              {Object.keys(stocksInformation).map((stockName) => {
                return <option value={stockName}>{stockName}</option>
              })}
            </select>
        </div>
        <h1 className="second-title">Calculate profit between dates</h1>
        <div className="cols-container">
          <div className="col">
            <p>Start date</p>
            <select value={startDate} onChange={handleStartChange}>
              <option value="" disabled>Select a month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
            </select>
          </div>
          <div className="col">
            <p>End date</p>
            <select value={endDate} onChange={handleEndChange}>
              <option value="" disabled>Select a month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
            </select>
          </div>
        </div>
        <div className="cta">
          <button onClick={handleCalculateProfitClick}>Calculate</button>
        </div>

        <div className="profit-result">
          <h1>The profit is ${profit}</h1>
        </div>
      </div>
    </AppWrapper>
  );
}

export default App;
