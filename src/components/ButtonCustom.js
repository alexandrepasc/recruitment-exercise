import React from 'react';
import { Button } from 'react-bootstrap';

export default function ButtonCustom(props) {

    return (
        <Button 
            type={props.type}
            id={props.id}
            name={props.name}
            className={props.class}
            onClick={props.onClick}
        >
            {props.value}
        </Button>
    );
}