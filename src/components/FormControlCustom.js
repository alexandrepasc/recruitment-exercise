import React from 'react';
import { Form } from 'react-bootstrap';

export default function FormControlCustom(props) {

    return (
        <Form.Control 
            type={props.type}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            className={props.class}
            onChange={props.handleChange}
        />
    );
}