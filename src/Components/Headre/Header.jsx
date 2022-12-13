// import React, { useState } from "react";

export default function Header({ category, sort, list }) {

    return (
        <nav>
            <div>
                <label>Filter by</label>
                <select onChange={(e) => { sort(e.target.value) }}>

                </select>
            </div>
        </nav>
    );
}
// {listOfCategory.map((cetegory) => (
//     <option >{cetegory}</option>
// ))}