import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import TableWrapper from '../TableWrapper';

class Amortization extends Component {
  calcRows({numMonths, loanAmount, monthlyPayment, aprPerMonth, extra}) {
    extra = parseInt(extra);
    let rows = [];
    let totalInterestPaid = 0;
    let totalPrincipalPaid = 0;

    for(let i = numMonths; i > 0; i--) {
      let interestPaid = loanAmount * aprPerMonth;
      let principalPaid = (monthlyPayment - interestPaid) + extra;
      let remainingPrincipal = loanAmount - principalPaid;

      loanAmount = loanAmount - principalPaid;
      totalInterestPaid += interestPaid;
      totalPrincipalPaid += principalPaid;

      rows.push({
        months: i,
        monthlyPayment,
        interestPaid,
        totalInterestPaid,
        principalPaid,
        totalPrincipalPaid,
        remainingPrincipal
      });

      if(remainingPrincipal < 0){
        break;
      }
    }

    return rows;
  }

  render() {
    let aprPerMonth = (this.props.apr * 0.01) / 12;
    let loanAmount = this.props.loanAmount;
    let numMonths = this.props.term * 12;

    let monthlyPayment = loanAmount * ( ( aprPerMonth * Math.pow( ( 1 + aprPerMonth ), numMonths ) )
                                      / ( Math.pow( (1 + aprPerMonth ), numMonths ) - 1 ) );

    loanAmount = this.props.remainingLoan;



    let rowsWithoutExtra = this.calcRows({numMonths, loanAmount, monthlyPayment, aprPerMonth, extra: 0});
    let rowsWithExtra = this.calcRows({numMonths, loanAmount, monthlyPayment, aprPerMonth, extra: this.props.extra});

    let lastRowWithoutExtra = rowsWithoutExtra[rowsWithoutExtra.length - 1];
    let lastRowWithExtra = rowsWithExtra[rowsWithExtra.length - 1];

    let totalInterestPaid = (lastRowWithoutExtra) ? lastRowWithExtra.totalInterestPaid : 0;
    let totalInterestSaved = (lastRowWithoutExtra || lastRowWithExtra) ? lastRowWithoutExtra.totalInterestPaid - lastRowWithExtra.totalInterestPaid : 0;

    let years = ((numMonths - rowsWithExtra.length) / 12);
    let months = numMonths - rowsWithExtra.length;



let x = 360 - (this.props.remainingTerm * 12);
console.log(x)
let y = rowsWithExtra[x];
console.log(y)


    let numMonthsLeft = this.props.remainingTerm * 12;

    if(numMonthsLeft !== numMonths) {
      rowsWithoutExtra = rowsWithoutExtra.slice(numMonths - numMonthsLeft, numMonths);
      rowsWithExtra = rowsWithExtra.slice(numMonths - numMonthsLeft, numMonths);
    }












    return (
      <div className="Table">
          <div className="monthly-payment">
            <h1 className="numbers">Monthly Payment: <span className="heading"> ${monthlyPayment.toFixed(2)} </span> </h1>
            <h1 className="numbers">Total Interest: <span className="heading"> ${totalInterestPaid.toFixed(2)} </span> </h1>
            <h1 className="numbers">Total Saved: <span className="heading"> ${totalInterestSaved.toFixed(2)} </span> </h1>
            <h1 className="numbers">Months saved: <span className="heading"> {months} &nbsp; ({years.toFixed(1)} Years) </span></h1>
          </div>
          <hr/>
          <TableWrapper rows={rowsWithExtra} />
      </div>
    );
  }
}

Amortization.propTypes = {
  apr: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired,
  loanAmount: PropTypes.string.isRequired,
  remainingLoan: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired
}

export default Amortization;
