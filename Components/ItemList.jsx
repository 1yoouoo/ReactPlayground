import React from "react";
import Item from "./Item.jsx"

const dummyList = [
    {
        id:1,
        details:"asdasd"
    },
    {
        id:2,
        details:"asdddsa"
    }
] 

const ItemList = () => {
    return (
        <div>
            <Item dummyList={ dummyList }/>
        </div>
    )
}

export default ItemList