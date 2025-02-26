import React from "react";

const PaymentSection = ({ cart }) => {
  const totalCost = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="payment-section">
      <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
      <h3>Payment Methods</h3>
      <div className="payment-form">
        <div className="payment-methods">
          <div className="method">
            <input type="radio" id="credit-card" name="payment-method" />
            <label htmlFor="credit-card">
              <i className="fas fa-credit-card"></i> Credit Card
            </label>
          </div>
          <div className="method">
            <input type="radio" id="debit-card" name="payment-method" />
            <label htmlFor="debit-card">
              <i className="fas fa-credit-card"></i> Debit Card
            </label>
          </div>
          <div className="method">
            <input type="radio" id="paypal" name="payment-method" />
            <label htmlFor="paypal">
              <i className="fab fa-paypal"></i> PayPal
            </label>
          </div>
          <div className="method">
            <input type="radio" id="apple-pay" name="payment-method" />
            <label htmlFor="apple-pay">
              <i className="fab fa-apple-pay"></i> Apple Pay
            </label>
          </div>
          <div className="method">
            <input type="radio" id="google-pay" name="payment-method" />
            <label htmlFor="google-pay">
              <i className="fab fa-google-pay"></i> Google Pay
            </label>
          </div>
        </div>
        <button className="pay-button">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default PaymentSection;
