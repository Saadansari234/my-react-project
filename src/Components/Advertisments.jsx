
import React from "react";
import "./Style.css"
import AddDetails from "./AddDetails";

class Advertisments extends React.Component{
    constructor(props){
    super(props);
    }

    render(){
        return (
            <div className="advertisements">
               <AddDetails details="https://m.media-amazon.com/images/I/614q47uoPNL._AC_UF1000,1000_QL80_.jpg"/>
               <AddDetails details="https://www.leafstudios.in/cdn/shop/products/1MainImage3_800x.jpg?v=1620280054"/>
               <AddDetails details="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HyZLFDIAnLfDOjgB0OrkXt3GrvC7QcELbQ&usqp=CAU"/>
               <AddDetails details="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbf-aow9YaKfK2KLGCGAfjS42NPqQ6u-V3gRr8Yf9fjQ4ZYcIJGjCsC6eAj_SGqYdFpQo&usqp=CAU"/>
               <AddDetails details="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFg-SlQi800iQar7OjAJJ2aR-cjMlBDdkRg&usqp=CAU" />
               <AddDetails details="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuIVMu5AmFIHw7ALCgBmZqWwNUFs0rUGWyQ&usqp=CAU" />
               <AddDetails details="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKKjQp6cfhXEogd3YtGFzVLrxsDq3Bfudyg&usqp=CAU" />
               <AddDetails details="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5srqZqIfOaVj9CYbq6Hor-LlieQm776-ppg&usqp=CAU" />
            </div>
        )
    }
}

export default Advertisments;