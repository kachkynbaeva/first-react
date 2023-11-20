import React from "react";
import MyButton from "./MyButtons";
import Image from './Assets/rectan.png'


const Card = () => {
    return (
        <div>
            <img src={Image} alt=""/>
            <MyButton/>
            <input type="text"/>
        </div>
    )
}
export default Card;