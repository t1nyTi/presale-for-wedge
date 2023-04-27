import "./styles.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import * as React from "react";

const debug = true;

const initialState = {
  amount: "2.00",
  orderID: "",
  onApproveMessage: "",
  onErrorMessage: ""
};

export default class PaymentMethodTP extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.onApprove = this.onApprove.bind(this);
    this.onError = this.onError.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    this.setState({
      amount: event.target.value,
      orderID: "",
      onApproveMessage: "",
      onErrorMessage: ""
    });
  }

  createOrder(data, actions) {
    if (debug) console.log("Creating order for amount", this.state.amount);
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: this.state.amount
            }
          }
        ]
      })
      .then((orderID) => {
        this.setState({ orderID: orderID });
        return orderID;
      });
  }

  onApprove(data, actions) {
    let app = this;
    return actions.order.capture().then(function (details) {
      app.setState({
        onApproveMessage: `Transaction completed by ${details.payer.name.given_name}!`
      });
    });
  }

  onError(err) {
    this.setState({
      onErrorMessage: err.toString()
    });
  }

  onClick() {
    if (debug) console.log("When clicked, amount was", this.state.amount);
  }

  render() {
    return (
      <div style={{ minHeight: "300px" }}>
        <table className="table" style={{ maxWidth: "400px" }}>
          <tbody>
            <tr>
              <th>
                <label htmlFor="amount">Order Amount: </label>
              </th>
              <td>
                <select onChange={this.onChange} name="amount" id="amount">
                  <option value="2.00">$300.00</option>
                  <option value="4.00">$600.00</option>
                  <option value="6.00">$900.00</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Order ID:</th>
              <td>{this.state.orderID ? this.state.orderID : "unknown"}</td>
            </tr>
            <tr>
              <th>On Approve Message: </th>
              <td data-testid="message">{this.state.onApproveMessage}</td>
            </tr>
            <tr>
              <th>On Error Message: </th>
              <td data-testid="error">{this.state.onErrorMessage}</td>
            </tr>
          </tbody>
        </table>
        <PayPalScriptProvider options={{ "client-id": "test" }}>
          <PayPalButtons
            createOrder={this.createOrder}
            onApprove={this.onApprove}
            onError={this.onError}
            onClick={this.onClick}
          />
        </PayPalScriptProvider>
      </div>
    );
  }
}
