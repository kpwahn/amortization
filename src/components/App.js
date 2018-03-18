import React, { Component } from 'react';
import Form from './Form';

import './styles.css';

import Amortization from './Amortization';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loanAmount: '250000',
      remainingLoan: '250000',
      apr: '4.5',
      term: '30',  // In years
      remainingTerm: '30',
      extra: '0'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    if(name === 'remainingTerm' && value > this.state.term) {
      value = this.state.term;
    }

    this.setState({
      [name]: value
    });
  }

  render() {
    let {apr, extra, loanAmount, remainingLoan, remainingTerm, term} = this.state;



    return (
      <div className="App">
        <Form
          apr={apr}
          extra={extra}
          handleChange={this.handleChange}
          loanAmount={loanAmount}
          remainingLoan={remainingLoan}
          remainingTerm={remainingTerm}
          term={term}
        />
        <Amortization
          apr={apr || 0}
          extra={extra || 0}
          loanAmount={loanAmount || 0}
          remainingLoan={remainingLoan || 0}
          remainingTerm={remainingTerm || 0}
          term={term || 0}
        />
      </div>
    );
  }
}

export default App;
