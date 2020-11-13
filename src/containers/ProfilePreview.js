import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { RenderProfile } from '../impl/ProfilePreviewImpl';

export default function ProfilePreview(props) {

    return (
        <Row className='justify-content-md-center'>
            <Col className='col-md-12'>
                <NavLink to='/' onClick={props.handleBack}>
                    Back
                </NavLink><br/>
                <Row><Col>&nbsp;</Col></Row>
                <Row><Col>{RenderProfile(props.profile)}</Col></Row>
            </Col>
        </Row>
        
    );
}