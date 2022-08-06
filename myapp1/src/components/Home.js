import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Product from "./Productdisplay";
import JSON from "./db.json";

class Home extends Component {
    constructor(){
        super()

        this.state={
            productData:JSON,
            filteredData:JSON
        }
    }
    render() {
        return(
            <>
                <Header/>
                <Product productData = {this.state.productData} />
                <Footer />
            </>
        )
    }
}

export default Home;