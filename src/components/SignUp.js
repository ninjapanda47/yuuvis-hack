import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import * as itemAPI from '../utils/api'

export class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let value = event.target.value
        let name = event.target.id
        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const user = this.state
        const newUser = await itemAPI.addUser(user)
        newUser.success ? this.props.isloggedin({ isloggedin: true, username: newUser.user.username }) : this.props.isloggedin({ isloggedin: false, username: null })
        localStorage.token = newUser.token
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <Container fluid className="m-0">
                    <Row className="mt-5">
                        <Card style={{ width: '50%' }} className="m-auto center">
                            <Card.Body>
                                <Card.Title>Sign up for an account</Card.Title>
                                <Form style={{ width: '100%' }} onSubmit={this.handleSubmit}>
                                    <Form.Group as={Row} controlId="name" value={this.state.name} onChange={this.handleChange}>
                                        <Form.Label column sm="3" className="text-left">Name</Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="text" placeholder="John Smith" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="email" value={this.state.email} onChange={this.handleChange}>
                                        <Form.Label column sm="3" className="text-left">Email</Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="email" placeholder="user@example.com" />
                                        </Col>
                                    </Form.Group>
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
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SignUp
