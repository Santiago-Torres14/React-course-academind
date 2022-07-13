import "./Card.css"
import React from "react";

interface Props {
    children?: React.ReactNode;
}

const Card : React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return <div className={"card " + props.className}>
        {props.children}
    </div>
}

export default Card;