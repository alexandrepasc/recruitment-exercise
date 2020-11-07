import { Col, Row } from "react-bootstrap";
import LabelCustom from "../components/LabelCustom";

export function RenderProfile(props) {

    return (
        <div>
            <Row>
                <Col className='col-md-12 text-center'><LabelCustom text='Profile' textSize='25' /></Col>
            </Row>
            <Row>
                <Col>
                    <LabelCustom text='&nbsp;' textSize='25' />
                </Col>
            </Row>
            <Row>
                <Col className='text-right'><LabelCustom text='Name:' textSize='18' textColor='black' /></Col>
                <Col>{props.firstName}&nbsp;{props.lastName}</Col>
            </Row>
            <br/>
            <Row>
                <Col className='text-right'><LabelCustom text='Birth date:' textSize='18' textColor='black' /></Col>
                <Col>{props.birthDate}</Col>
            </Row>
            <br/>
            <Row>
                <Col className='text-right'><LabelCustom text='Username:' textSize='18' textColor='black' /></Col>
                <Col>{props.username}</Col>
            </Row>
        </div>
    );
}