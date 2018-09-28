import React, { Component } from "react";
import ReactDropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import {fetchProducts} from '../actions'



class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // search: '',
            categoryList: ["Health", "Beer", "Industrial"],
            // category: '',
            // price: '',
            sortPrice: ["Low to High", "High to Low"]
        }
        this.props.fetchProducts(this.state)
        //fetchProducts(this.state);
        
        console.log(props)
    }

    selectCategory = (event) => {
        console.log(event);
        this.setState({category: event.value})
    }
    
    search = () => {
        this.props.fetchProducts({
        //    fetchProducts({
            category: this.state.category,
            price: "lowest",
        });
    }
    
    render() {

        console.log(fetchProducts);
        console.log(this.props.fetchProducts);
        console.log(fetchProducts === this.props.fetchProducts);
        return (
            <div>
                <div className='container'>
                    <h1 className="col-md-6 col-md-offset-5 title">Products</h1>
                    <div className='col-md-3 col-md-offset-6' style={{width: '25%'}}>
                        <ReactDropdown className='cat-drop' onChange={(event) => this.selectCategory(event)} options={this.state.categoryList} value={this.state.category} placeholder="Select an Category" />
                    </div>
                    <div>
                        <ReactDropdown className='col-md-3 sort-price' options={this.state.sortPrice} placeholder="Sort By" />
                    </div>
                    <div> 
                        <input className='col-md-3 prepend cat-drop' type="text" onChange={event => this.setState({search: event.target.value})} placeholder="Search" /> 
                    </div>
                    <div>
                        <button type="button" onClick={() => this.search()}>search for products</button>
                    </div>
                </div>
                <div>
                </div>
                
            </div>
        )
    }
}
// function mapStateToProps({products}){
//     return {products}
// }
function mapDispatchToProps (dispatch)  {
   return bindActionCreators({fetchProducts}, dispatch)
}
export default connect(null, mapDispatchToProps)(Header)