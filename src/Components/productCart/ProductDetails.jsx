
import React from 'react';
import {BsCurrencyRupee} from "react-icons/bs"


class ProductDetails extends React.Component{
    constructor(props){
    super(props);
    }

    render(){
        return (
            <div className='products-cart'>
            
            <img className="product-img" src={this.props.Image}/>
                <h2>{this.props.Name}</h2>   
                <div>
                <BsCurrencyRupee color='green' size="24" />
                <h3> {this.props.Price}.00</h3>
                </div>     
                <h3> {this.props.stars}</h3>
                <p> {this.props.Description} </p>

                <button type="button" className="btn btn-outline-primary">Primary</button>
               
            </div>
        )
    }
}

export default ProductDetails;