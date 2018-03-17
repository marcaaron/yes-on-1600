import React, { Component } from "react";

class BusinessRender extends Component {
  render() {
    return (
      <div className="social-results">
        {this.props.vars[1] - this.props.futureCost > 0
          ? [
              <span className="social-saving" key="bus-tot-sav">
                <em>Total Savings:</em>
              </span>,
              <p className="social-amount" key="bus-tot-sav-soc">
                <span className="social-cost">
                  <em>${this.props.vars[1] - this.props.futureCost}</em>
                </span>
                <span className="social-year">/yr</span>
              </p>
            ]
          : [
              <span className="social-contribution" key="bus-tot-sav-soc">
                <em>Total Contribution:</em>
              </span>,
              <p className="social-amount" key="bus-tot-cont-soc">
                <span className="social-cost">
                  <em>${parseInt(this.props.futureCost / 12, 10)}</em>
                </span>
                <span className="social-year">/mo</span>
              </p>
            ]}
        <div className="employees-covered-block">
          <span className="social-100">100 PERCENT</span>
          <span className="social-employees">EMPLOYEES</span>
          <span className="social-covered">COVERED</span>
        </div>
      </div>
    );
  }
}
export default BusinessRender;
