import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LabelCustom from './components/LabelCustom';
import ProfilePreview from './containers/ProfilePreview';
import RegisterUserForm from './containers/RegisterUserForm';
import './css/bootstrap.min.css';

class Main extends React.Component {

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
            render: ''
        };
    }

    handleSubmit(props) {
        console.log('submit');

        this.setState({
            profile: props,
            render: <Redirect to='/preview' />
        });
    }

    render() {

        return (
            <div>
                {this.state.render}
                <Container>
                    <Switch>
                        <Route path='/preview'>
                            <ProfilePreview profile={this.state.profile} />
                        </Route>

                        <Route path="/">
                            <Row>
                                <Col>
                                    <LabelCustom text='&nbsp;' textSize='10' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <LabelCustom text='Insert your personal data' textSize='25' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <LabelCustom text='&nbsp;' textSize='25' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <RegisterUserForm handleSubmit={(props) => this.handleSubmit(props)} />
                                </Col>
                            </Row>
                        </Route>
                    </Switch>
                </Container>
            </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <Main />
    </Router>,
    document.getElementById('root')
)