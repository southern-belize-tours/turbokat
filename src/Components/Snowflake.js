import { useState } from "react";

function Snowflake (props) {

    // const [speed, setSpeed] = useState(0);

    // Stagger the starting position by a few hundred pixels
    const [top, ] = useState(props.mobile ? Math.floor(Math.random() * 200) - 200 : -100);

    // The prettiest snowflakes are between 40px and 110px
    const [size, ] = useState(props.mobile ? Math.floor(Math.random() * 70) + 40 : 100);

    return(
        <div class={`snowflake ${props.mobile ? "mobile" : "fixed"} ${props.filled ? "blue": ""}`}
            style={{left: props.xPos, fontSize: `${size}px`, top: `${top}px`}}>❄</div>
    );
} export default Snowflake;