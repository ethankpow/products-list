import React, {Component} from "react";


class Product extends Component {
    constructor(){
        super()

        this.state = {
            category: this.props.category,
            name: this.props.name,
            price: this.props.price,
            image: this.props.image
        }
    }
    
    render (){
        return(
            <div>
                
            </div>
        )
    }
}
export default Product