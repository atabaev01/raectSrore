import { render } from '@testing-library/react';
import React, { Component } from 'react';
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
            {id: 10, title:"card 1", description:"1" },
            {id: 20, title:"card 2", description:"2" },
            {id: 30, title:"card 3", description:"3" },
            {id: 40, title:"card 4", description:"4" },
        ]
    }

    consoleTitle= (title)=> () =>{
        console.log(title);
    }
    consoleItem = (id)=> ()=> {
        const item=this.state.prodlist.find(item=>item.id===id)
        console.log(item);
    }

    render() {
        return (
            <ul className='row product-list'>
                {this.state.prodlist.map(item =>(
                    <li key={item.id} className="col-3">
                        <ProductItem title={item.title} 
                        description={item.description}
                        consoleTitle={this.consoleTitle(item.title)}
                        consoleItem={this.consoleItem(item.id)}
                        />
                    </li>
                ))}
            </ul>
        )}
};

export default ProductList;