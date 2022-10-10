import React from 'react';
import {ListGroup, Row} from "react-bootstrap";
import Color from './Color';


const ListaColores = ({propsArregloColor, borrarColor}) => {
    return (
        <ListGroup horizontal>
        <Row>
            {
                propsArregloColor.map((color, posicion)=><Color 
                key={posicion} 
                nombreColor={color} 
                borrarColor={borrarColor}></Color>)
            }
        </Row>
        </ListGroup>
    );
};

export default ListaColores;