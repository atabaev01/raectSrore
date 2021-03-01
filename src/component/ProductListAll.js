import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Cart from './Cart';
import ProductItem from './ProductItem';

class ProductList extends Component {
    // return (
    //     <ul className='row product-list'>
    //         <li className="col-3"><ProductItem title="card 1" description="1"/></li>
    //         <li className="col-3"><ProductItem title="card 2" description="2"/></li>
    //         <li className="col-3"><ProductItem title="card 3" description="3"/></li>
    //         <li className="col-3"><ProductItem title="card 4" description="4"/></li>
    //     </ul>
    // );
    state = {
        prodlist: [
            { id: 10, title: "card 1", description: "1", price: 140, count:1 },
            { id: 20, title: "card 2", description: "2",price: 140, count:1 },
            { id: 30, title: "card 3", description: "3", price: 140, count:1 },
            { id: 40, title: "card 4", description: "4",price: 140, count:1 },

        ],
        cart: []
    }

    consoleTitle = (title) => () => {
        console.log(title);
    }
    // consoleItem = (id)=> ()=> {
    // const deletes=this.state.prodlist.filter((item)=>item.id !== id)
    // this.setState({
    //     prodlist: deletes
    // })
    //}
    addToCart = (id) => () => {
        const exist = this.state.cart.find((item)=>item.id===id)
        if (exist === undefined){
            this.setState((state)=>{
                const item = state.prodlist.find((item)=>item.id===id)
                return {
                    cart:[...state.cart, {...item}]
                }
            })
            console.log(this.state.cart);
        }
        // this.setState((state) => {
        //     const item = state.prodlist.find((item)=>item.id===id)
        //     return {
        //         cart: [...state.cart, {...item}]
        //     }
        // })
        // console.log(this.state.cart);
    }
    cartPluse = (id) => () => {
        const newCart = [...this.state.cart]
        const cartItem = newCart.find(item=>item.id===id)
        cartItem.count +=1
        this.setState({
            cart:newCart
        })
    }
    cartMinus = (id) => () => {
        const newCart = [...this.state.cart]
        const cartItem = newCart.find(item=>item.id===id)
        cartItem.count -=1
        this.setState({
            cart:newCart
        })
    }

    render() {
        const totalCart = this.state.cart.reduce((ans,item)=>item.price+ans*item.count,0)
        return (
            <div>
            <ul className='row product-list'>
                {this.state.prodlist.map((item) => (
                    <li  key={item.id} className="col-3">
                        <ProductItem
                        item={item}
                            title={item.title}
                            description={item.description}
                            consoleTitle={this.consoleTitle(item.title)}
                            addToCart={this.addToCart(item.id)}
                        />
                    </li>
                ))}
            </ul>
            < Cart cartMinus={this.cartMinus} cartPluse={this.cartPluse} totalCart={totalCart} cart={this.state.cart}/>
            </div>
            )

    }
};

export default ProductList;