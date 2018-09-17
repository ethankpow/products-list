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
            search: '',
            categoryList: ["Health", "Beer", "Industrial"],
            category: '',
            price: ''
        }
        this.props.fetchProducts(this.state)

    }

    selectCategory = (option) => {
        this.setState({category: option.label})
    }

    
    render() {
        return (
            <div>
                <div className='container'>
                    <h1 className="col-md-6 col-md-offset-5 title">Products</h1>
                    <div style={{width: '25%'}}>
                        <ReactDropdown className='cat-drop'  onChange={this.selectCategory} options={this.state.categoryList} value={this.state.categoryList[0]} placeholder="Select an option" />
                        <input className='prepend cat-drop' type="text" onChange={event => this.setState({search: event.target.value})} placeholder="Search" />
                    </div>
                </div>
                <div>
                </div>
                
            </div>
        )
    }
}
function mapStateToProps({products}){
    return {products}
}
function mapDispatchToProps (dispatch)  {
   return bindActionCreators({fetchProducts}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)