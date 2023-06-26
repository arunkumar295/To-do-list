import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'reactstrap';
 const Footer= ({length})=> {
 const year= new Date()

    return(
    <div> 
        <h1 className="py-4 bg-dark text-white text-center fixed-bottom">Copyright &copy; {year.getFullYear()}   {length}</h1>
        <div className="container-fluid>">
            <div className="row">
                <div className="col-lg-3 col-sm-3 bg-dark">arun</div>
                <div className="col-lg-9 col-sm-9 text-dark">kumar</div>
            </div>
        </div>
    </div>
    )
 }
 export default Footer