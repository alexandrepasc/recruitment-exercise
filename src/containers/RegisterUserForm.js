import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ButtonCustom from '../components/ButtonCustom';
import FormControlCustom from '../components/FormControlCustom';
import LabelCustom from '../components/LabelCustom';
import { acceptTermsChangeImpl, passwordChangeImpl, resetClickImpl, textChangeImpl } from '../impl/RegisterUserFormImpl';

export default class RegisterUserForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            profile: {
                firstName: '',
                lastName: '',
                birthDate: '',
                username: '',
                password: '',
                confirmPassword: '',
                acceptTerms: false,
            },
            error: {
                password: ''
            }
        };
    }

    handleChange(event) {

        var dict = textChangeImpl({event: event, profile: this.state.profile});

        this.setState({
            profile: dict
        });
    }

    handlePasswordChange(event) {

        var dict = passwordChangeImpl({event: event, profile: this.state.profile, error: this.state.error});

        this.setState({
            profile: dict.profile,
            error: dict.error
        });
    }

    handleReset() {

        var dict = resetClickImpl(this.state);

        this.setState({
            profile: dict.profile,
            error: dict.error
        });
    }

    handleCheckTerms(event) {

         var dict = acceptTermsChangeImpl({event: event, profile: this.state.profile});

        this.setState({
            profile: dict
        });

        // console.log(this.state.profile.acceptTerms);
    }

    render() {
        return (
            <Form>
                <Form.Group>
                    <LabelCustom text='Name:' textSize='18' textColor='black' inline='true' />
                    <LabelCustom text='*' textSize='18' textColor='red' inline='true' />
                    <Row>
                        <Col className='col-md-6'>
                            <FormControlCustom
                                type='text'
                                id='firstName'
                                name='firstNameName'
                                placeholder='First Name'
                                handleChange={(e) => this.handleChange(e)}
                                value={this.state.profile.firstName}
                            />
                        </Col>
                        <Col className='col-md-6'>
                            <FormControlCustom
                                type='text'
                                id='lastName'
                                name='lastNameName'
                                placeholder='Last Name'
                                handleChange={(e) => this.handleChange(e)}
                                value={this.state.profile.lastName}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <br/>
                <Form.Group>
                    <LabelCustom text='Birth date:' textSize='18' textColor='black' inline='true' />
                    <LabelCustom text='*' textSize='18' textColor='red' inline='true' />
                    <Row>
                        <Col className='col-md-6'>
                            <FormControlCustom
                                type='date'
                                id='birthDate'
                                name='birthDateName'
                                placeholder='Birth Date'
                                handleChange={(e) => this.handleChange(e)}
                                value={this.state.profile.birthDate}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <br/>
                <Form.Group>
                    <LabelCustom text='Username:' textSize='18' textColor='black' />
                    <Row>
                        <Col className='col-md-6'>
                            <FormControlCustom
                                type='text'
                                id='username'
                                name='usernameName'
                                placeholder='Username'
                                handleChange={(e) => this.handleChange(e)}
                                value={this.state.profile.username}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <br/>
                <Form.Group>
                    <LabelCustom text='Password:' textSize='18' textColor='black' />
                    <Row>
                        <Col  className='col-md-6'>
                            <FormControlCustom
                                type='password'
                                id='password'
                                name='passwordId'
                                placeholder='Password'
                                handleChange={(e) => this.handlePasswordChange(e)}
                                value={this.state.profile.password}
                            />
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col  className='col-md-6'>
                            <FormControlCustom
                                type='password'
                                id='confirmPassword'
                                name='confirmPasswordId'
                                placeholder='Repeat Password'
                                handleChange={(e) => this.handlePasswordChange(e)}
                                value={this.state.profile.confirmPassword}
                            />
                            <LabelCustom text={this.state.error.password} textSize='18' textColor='red' />
                        </Col>
                    </Row>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Row>
                        <Col className='col-md-6'>
                            <Link to="/terms.pdf" target="_blank">
                                <u><LabelCustom text='Terms' textSize='18' textColor='blue' inline='true' /></u>
                            </Link>
                            <LabelCustom text=' and ' textSize='18' textColor='black' inline='true' />
                            <u><LabelCustom text='Privacy Policy' textSize='18' textColor='blue' inline='true' /></u>
                            <LabelCustom text='.' textSize='18' textColor='black' inline='true' />
                            <LabelCustom text='&nbsp;' textSize='9' textColor='black' />
                            <Form.Check 
                                type='checkbox'
                                id='acceptTerms'
                                label='I agree to the Terms and Privacy Policy'
                                onChange={(e) => this.handleCheckTerms(e)}
                                checked={this.state.profile.acceptTerms}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <br/><br/>
                <Form.Group>
                    <ButtonCustom
                        type='button'
                        id='submitId'
                        name='submitId'
                        value='submit'
                        class='btn btn-primary btn-lg'
                        onClick={() => this.props.handleSubmit(this.state.profile)}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <ButtonCustom
                        type='button'
                        id='resetId'
                        name='resetId'
                        value='Reset'
                        class='btn btn-secondary btn-lg'
                        onClick={() => this.handleReset()}
                    />
                </Form.Group>
            </Form>
        );
    }
}