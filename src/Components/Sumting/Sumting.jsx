import React, { useState } from "react";

export default function Sumting() {
    const [flag, setFlag] = useState(true);

    return <div>
        <button onClick={() => { setFlag(!flag) }}>click me</button>
        <br />
        {flag && <h1>its works!</h1>}
    </div>;
}
