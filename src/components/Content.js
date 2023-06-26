import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contentfunc from "./Contentfunc";


 const Content= ({handleChange,handleDelete,content})=> {

    return(
    <div>
        {content.length ? 
        <Contentfunc 
        content ={content}
       handleDelete= {handleDelete}
       handleChange= {handleChange} />
        :<p>nothing</p>}
    </div>
    )
 }
 export default Content