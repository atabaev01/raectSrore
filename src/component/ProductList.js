import React, {useEffect, useState} from 'react';
import Cart from './Cart';
import ProductItem from './ProductItem';

const ProductList = () => {

    

    const [prodlist, setProductList] = useState(
        [
            { id: 10, title: "card 1", description: "1", price: 140, count:1 },
            { id: 20, title: "card 2", description: "2",price: 140, count:1 },
            { id: 30, title: "card 3", description: "3", price: 140, count:1 },
            { id: 40, title: "card 4", description: "4",price: 140, count:1 },
        ]
    )


    const [cart, setCart] = useState (
        []
    )

    useEffect(()=>{
        console.log('i am burn');
    })

    const addToCart = (id) => () => {
        const exist = cart.find((item)=>item.id===id)
        if (exist === undefined){
            const item = prodlist.find((item)=>item.id===id)
            setCart([...cart, {...item}])
            
            
        }
    }
    const cartPluse = (id) => () => {
        const newCart = [...cart]
        const cartItem = newCart.find(item=>item.id===id)
        cartItem.count +=1
        setCart(newCart)
    }
    const cartMinus = (id) => () => {
        const newCart = [...cart]
        const cartItem = newCart.find(item=>item.id===id)
        cartItem.count -=1
        setCart(newCart)
    }
    const totalCart = cart.reduce((ans,item)=>item.price+ans*item.count,0)

    return (
        <div>
        <ul className='row product-list'>
            {prodlist.map((item) => (
                <li  key={item.id} className="col-3">
                    <ProductItem
                    item={item}                
                    addToCart={addToCart(item.id)}
                    />
                </li>
            ))}
        </ul>
        < Cart cartMinus={cartMinus} cartPluse={cartPluse} totalCart={totalCart} cart={cart}/>
        </div>
    );
};

export default ProductList;