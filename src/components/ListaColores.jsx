import React from 'react';
import {ListGroup} from "react-bootstrap";
import Color from './Color';


const ListaColores = (propsArregloColor) => {
    return (
        <ListGroup>
           {/* {
            propsArregloColor.map((color, posicion)=><Color key={posicion} nombreColor={color}></Color>)
           } */}
           <Color></Color>
        </ListGroup>
    );
};

export default ListaColores;