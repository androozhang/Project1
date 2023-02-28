import React from "react";
import './Food.css'

const Food = (props) => {
    return (
        <div className="Food">
            <p className="name">{props.name}</p>
            <p>{props.type}</p>
            <p>❤️ {props.rating}</p>
        </div>
    )

}
export default Food;