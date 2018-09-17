import React, {Component} from "react";
import Header from './header'
import ProductView from './productView'

class App extends Component {
    render (){
        return(
            <div>
                <Header  />
                <ProductView />
            </div>
        )
    }
}
export default App