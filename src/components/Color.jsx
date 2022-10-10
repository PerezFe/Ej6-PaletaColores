import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const Color = () => {
  return (
    <ListGroup.Item style={{width:300}}>
        <p className="text-center">Nombre Color</p>
      <div
          className="mh-100 mx-5"
          style={{
            marginLeft: 80,
            width: 100,
            height: 100,
            backgroundColor: "blue",
          }}
        >
        </div>
      <Button variant="warning" className="m-3">Borrar</Button>
    </ListGroup.Item>
  );
};

export default Color;
