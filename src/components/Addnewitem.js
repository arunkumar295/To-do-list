import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Form } from 'reactstrap';
import { FaPlus } from "react-icons/fa";
 const Addnewitem = ({setAddItem,addItem,handleSubmit}) => {

    return(
        <div>
    <Form className=" my-form">
        <input type="text" placeholder="Add item" className="me-5" value={addItem} onChange={(e)=> setAddItem(e.target.value)} />
         <FaPlus role="button" className="text-black b-1" onClick={handleSubmit} />
    </Form>
    </div>
    )
 }
 export default Addnewitem