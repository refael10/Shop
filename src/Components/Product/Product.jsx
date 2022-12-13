import React from "react";

export default function Product({ id, title, price, description, category, image, rating, rate, count }) {
    return (
        <div style={{ border: '2px solid black', width: '250px', flexDirection: 'row', }}>
            <div>
                <img src={image} alt={'aa'} height={150} width={150} />
            </div>
            <div>
                <br />
                <p>{title}</p>
                <p>{price}</p>
                <p>{category}</p>
            </div>
        </div>
    );
}
