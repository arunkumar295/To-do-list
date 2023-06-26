import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'reactstrap';
import { FaTrashAlt } from "react-icons/fa";
 const Contentfunc = ({handleChange,handleDelete,content})=> {

    return (
        (<Container>
            {content.map((item) => (
              <div className="d-flex flex-row my-3 justify-content-center" key={item.id}>
                    <div className="py-4 px-4 bg-dark my-3"><input type="checkbox" checked={item.checkbox} onChange={() =>handleChange(item.id)} /></div>
                    <div className="py-4 px-4 bg-dark my-3" ><label style ={(item.checkbox)?{textDecoration:"line-through"}:null} className="text-white" onDoubleClick={() =>handleChange(item.id)}>{item.title}</label></div>
                    <div className="py-4 px-4 bg-dark my-3"><FaTrashAlt role="button" className="text-white" onClick={() => {handleDelete(item.id)}}/></div>

              </div>
            ))}
        
        </Container>)
    )
 }
 export default Contentfunc


 