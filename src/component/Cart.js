import React from 'react';

const Cart = (props) => {
    return (
        <section>
            <h2>Cart</h2>
            <ul>
                {props.cart.map(item=>{
                    return <li key={item.id}>
                         {item.title} - {item.count} - {item.price*item.count} KGZ
                         <button onClick={props.cartPluse(item.id)}>+</button>
                         <button onClick={props.cartMinus(item.id)}>-</button>
                          </li>
                })}
            </ul>
            <p>Total {props.totalCart}</p>
        </section>
    );
};

export default Cart;