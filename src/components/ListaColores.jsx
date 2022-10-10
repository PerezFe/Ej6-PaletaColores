import React from 'react';
import {ListGroup} from "react-bootstrap";
import Color from './Color';


const ListaColores = (propsArregloColor) => {
    return (
        <ListGroup horizontal>
        <Color></Color>
        <Color></Color>
        <Color></Color>
        </ListGroup>
    );
};

export default ListaColores;