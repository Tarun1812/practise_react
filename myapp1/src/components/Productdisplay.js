import React from 'react';
import './Productdisplay.css'

const Product = (props) => {

    const renderData = props.productData.map((items) => {
        return (
            <div className='card'>
                <img src={items.image} alt={items.name} />
                <h3>{items.name}</h3>
             </div>
        )
    })

    return (
        <div className='main'>
            {renderData}
        </div>
    )
}
export default Product;