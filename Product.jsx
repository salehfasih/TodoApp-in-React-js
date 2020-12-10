import React from 'react';



function Product(props){

    return(

        <div>
            <h1>{props.Product.name}</h1>
    <p>{props.Product.description}</p>
        </div>
    )

}
export default Product;