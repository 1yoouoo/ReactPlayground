import * as React from 'react'
import ReactDom from "react-dom";
import ItemList from "./Components/ItemList";
import reportWebvitals from "./reportWebVitals"
import Header from "./Components/Header"
// import Item from "./Components/Item";



ReactDom.render(
    <React.StrictMode>
        <h2>To do list</h2>
        <Header />
        <ItemList />
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebvitals();
