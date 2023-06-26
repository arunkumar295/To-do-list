import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

 const Header= (props)=> {


    return(
    <div>
        <h1 className="py-4 bg-dark text-white text-center">{props.title}</h1>
        {/* <h1 className="py-4 bg-dark text-white text-center">{{title}}</h1> */}
    </div>
  
  )
 }
 Header.defaultProps={
    title: "Todo List"
}
 export default Header