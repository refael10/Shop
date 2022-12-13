import React from "react";
import Product from "../Product/Product";


export default function Products({ list }) {
    return (
        <div style={{ display: 'flex' }}>
            {list.map((product) => {
                return (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        category={product.category}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                    />
                )
            })}


        </div>
    );
}
