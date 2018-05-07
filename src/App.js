import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const mockData = {
    transactions: [
        {
            amount: 4.3,
            category: 'Food',
            note: 'Starbuck',
            date: new Date(2018, 5, 7)
        },
        {
            amount: 22.9,
            category: 'Transport',
            note: 'Cab',
            date: new Date(2018, 5, 7)
        },
        {
            amount: 1000,
            category: 'Income',
            note: 'Atm',
            date: new Date(2018, 5, 6)
        },
        {
            amount: 130,
            category: 'Income',
            note: 'From Bob',
            date: new Date(2018, 5, 5)
        },
        {
            amount: 73,
            category: 'Food',
            note: 'Groceries',
            date: new Date(2018, 5, 5)
        },
    ]
}

const Transaction = ({transaction}) => (
    <li>
        <p>{transaction.note}</p>
        <p>{transaction.amount}</p>
    </li>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
            <ul>
                {mockData.transactions.map((transaction, index) => <Transaction key={index} transaction={transaction}/>)}
            </ul>
        </div>

      </div>
    );
  }
}

export default App;
