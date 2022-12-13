// import React, { useState } from "react";
import { useContext } from "react";
import myContext from "../MyContext";
export default function Todo({ id, completed, children, remove, edit }) {
    const [dark, setDark] = useContext(myContext)
    const color = dark ? "white" : 'green';
    // const date = new Date();
    // const hours = date.getHours();
    // let timeOfDay;
    // if (hours > 6 && hours < 12) {
    //     timeOfDay = 'morning'
    // } else if (hours >= 12 && hours < 17) {
    //     timeOfDay = 'afternoon'
    // } else {
    //     timeOfDay = 'night'
    // }

    return (
        <>

            <span

                style={completed ? { textDecoration: 'line-through', color } : { color }}
            >
                <input type="checkbox" onClick={() => {
                    edit(id);
                    // setDark(!dark)
                }} checked={completed} />
                {children}
            </span>
            <span style={{ cursor: 'pointer' }} onClick={() => remove(id)}>
                {' '}  🗑
            </span>

            {/* <h1 title={timeOfDay}>good {timeOfDay}!</h1> */}
        </>
    );
}
