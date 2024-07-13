import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const handleCheckout = (values) => {
    console.log('Submitting order:', values);
    fetch('your_backend_api_url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Order placed successfully:', data);
      })
      .catch(error => {
        console.error('Error placing order:', error);
      });

    setCart([]);
    setShowCheckoutForm(false);
  };

  return (
    <div className="container my-5" style={{ width: '54%' }}>
      {cart.length === 0 ? (
        <div className="text-center">
          <h1>Your Cart is Empty</h1>
          <Link to="/" className="btn btn-warning">
            Continue Shopping
          </Link>
        </div>
      ) : (
        cart.map((product, index) => (
          <div key={index} className="card mb-3" style={{ width: '700px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.imgsrc} className="img-fluid rounded-start" alt="Product" />
              </div>
              <div className="col-md-8">
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mt-auto">{product.price}</button>
                  <button className="btn btn-warning mt-2">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      {cart.length !== 0 && (
        <div className="container text-center my-5" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <button className="btn btn-warning mx-5">Checkout</button>
          <button onClick={() => setCart([])} className="btn btn-warning">Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
