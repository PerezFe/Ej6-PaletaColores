import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const Color = ({nombreColor, borrarColor}) => {
  return (
    <ListGroup.Item style={{width:300}}>
        <p className="text-center">Nombre Color: {nombreColor}</p>
      <div
          className="mh-100 text-center"
          style={{
            marginLeft: 80,
            width: 100,
            height: 100,
            backgroundColor: nombreColor,
          }}
        >
        </div>
      <Button 
      variant="warning" 
      className="m-3" 
      onClick={()=>borrarColor(nombreColor)}>Borrar</Button>
    </ListGroup.Item>
  );
};

export default Color;
