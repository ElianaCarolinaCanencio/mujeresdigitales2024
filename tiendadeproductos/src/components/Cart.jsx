import React from 'react';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 && <p>El carrito está vacío</p>}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;