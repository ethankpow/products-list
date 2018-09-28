import React, {Component} from "react";
import Product from './product'
import Header from './header'
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchProducts } from "../actions";



class ProductView extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
        
    }
    renderProducts() {
        console.log(this.props)
        return this.props.products.map(product => {
          return  (
            <div className="col-md-4 product-object" key={product._id}>
                <div className="float-left"> Category: {product.category} </div>
                <div className="text-right"> ${product.price} </div>
                <img className="text-center" src={product.image} alt={product.name}/>
                <h4 className="text-center"> {product.name} </h4>
            </div>
        )  
        })
    }
    
    render() {
            if(this.props.products){
                return (
                    <div className='container'>
                     <div className="row offset-4">
                        {this.renderProducts()}
                     </div>
                    </div>
                )
            } else {
            return (
                <div>
                    <div>
                      Loading...
                    </div>
                </div>
            )    
    }
 }
}

function mapStateToProps({products}){
    return {products}
}


export default connect(mapStateToProps)(ProductView)