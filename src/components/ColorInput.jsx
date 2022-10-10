import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";


const ColorInput = () => {
    const [colordefault, setColordefault] = useState('blue', "")
    const [arregloColor, setArregloColor] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault();
        setArregloColor([...arregloColor, colordefault])
        setColordefault("blue")
    }

  return (
    <Container >
      <div style={{height: 100 }} className="d-flex">
        
        <div
          className="mh-100"
          style={{
            width: 100,
            height: 200,
            backgroundColor: colordefault,
          }}
        >
        </div>
        <div className="mx-3">
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control 
          type="text" 
          placeholder="Ingrese un color ej: Blue"
          onChange={(e)=> setColordefault(e.target.value)}
        //   onChange={(e)=> setTarea(e.target.value)}
          //enlace del input al state
          />
        <Button variant="primary" type="submit" className="mx-3">
          Enviar
        </Button>
        </Form.Group>
      </Form>
        </div>
      </div>
      <hr/>
      <ListaColores propsArregloColor={arregloColor}></ListaColores>
    </Container>
  );
};

export default ColorInput;
