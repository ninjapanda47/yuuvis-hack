import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import * as itemAPI from '../utils/api'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let value = event.target.value
        let name = event.target.id
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = this.state
            const login = await itemAPI.login(user)
            login.success ? this.props.isloggedin({ isloggedin: true, username: login.user.username }) : this.props.isloggedin({ isloggedin: false, username: null })
            localStorage.token = login.token
            this.props.history.push("/")
        } catch (errors) {
            console.log(errors)
        }
    }

    render() {

        return (
            <div>
                <Container fluid className="m-0">
                    <Row className="mt-5">
                        <Card style={{ width: '50%' }} className="m-auto center">
                            <Card.Body>
                                <Card.Title>Login</Card.Title>
                                <Form style={{ width: '100%' }} onSubmit={this.handleSubmit}>
                                    <Form.Group as={Row} controlId="username" value={this.state.username} onChange={this.handleChange}>
                                        <Form.Label column sm="3" className="text-left">Username</Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="text" placeholder="Username" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="password" value={this.state.password} onChange={this.handleChange}>
                                        <Form.Label column sm="3" className="text-left">Password</Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="password" placeholder="password" />
                                        </Col>
                                    </Form.Group>
                                    <div className="col text-center mb-2">
                                        <Button variant="primary" type="submit" >
                                            Submit
                    </Button>
                                    </div>
                                </Form>
                                <Card.Text>Don't have an account yet?  Sign up <NavLink to="/signup">here.</NavLink></Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login
