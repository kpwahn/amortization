import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react'

import './styles.css';

class Form extends Component {
  render() {
    return (
      <form className="Form">
        <div className="loan-inputs">
          <div className="labels">
            <label className="label">
              <h2>Loan Amount:</h2>
            </label>
            <label className="label">
              <h2>Annual Interest Rate:</h2>
            </label>
            <label className="label">
              <h2>Loan Term:</h2>
            </label>
            <label className="label">
              <h2 className="extra-label">Extra (per month):</h2>
            </label>
            <label className="label">
              <h2 className="extra-label">Remaining Loan:</h2>
            </label>
            <label className="label">
              <h2 className="extra-label">Remaining Term:</h2>
            </label>
          </div>
          <div className="inputs">
            <Input
              name="loanAmount"
              type="number"
              value={this.props.loanAmount}
              onChange={this.props.handleChange}
            />
            <Input
              name="apr"
              type="number"
              step="0.1"
              value={this.props.apr}
              onChange={this.props.handleChange}
            />
            <Input
              name="term"
              type="number"
              value={this.props.term}
              onChange={this.props.handleChange}
            />
            <Input
              min="0"
              name="extra"
              type="number"
              value={this.props.extra}
              onChange={this.props.handleChange}
            />
            <Input
              min="0"
              name="remainingLoan"
              type="number"
              value={this.props.remainingLoan}
              onChange={this.props.handleChange}
            />
            <Input
              min="0"
              name="remainingTerm"
              type="number"
              value={this.props.remainingTerm}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  apr: PropTypes.string.isRequired,
  loanAmount: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired
}

export default Form;
