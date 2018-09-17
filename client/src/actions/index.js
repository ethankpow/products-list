import axios from "axios";


export const FETCH_PRODUCTS = "FETCH_PRODUCTS"

export const fetchProducts = (query) =>{
    // /products?page=1&category=tools&price=highest&search=bacon
    let URL = 'http://localhost:5000/products'
    let config = {
        category: query.category,
        search: query.search,
        price: query.price,
        page: query.page
    }

    const response = axios({
        url: URL,
        method: 'get',
        params: config
    })
    console.log(response)
    return {
        type: FETCH_PRODUCTS,
        payload: response
    }
} 

