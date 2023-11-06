import React from "react";
import Login from "./pages/Login";
import Product from "./pages/Product";
// import ProductDetails from "./pages/ProductDetails"

import Layout from "./Layout";


function App() {
     const LogedIn= localStorage.getItem("LogediIn") 
    
     
    return (
        <Layout>
           {
            LogedIn && LogedIn==1 ? <Product /> : <Login />
           }
        </Layout>
    )
}


export default App;