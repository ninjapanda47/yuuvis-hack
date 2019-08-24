import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            results: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let value = event.target.value
        let name = event.target.id
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Container fluid className="m-0">
                    <Row className="m-2">
                        <Form style={{ width: '100%' }} onSubmit={this.handleSubmit}>
                            <Form.Group as={Row} >
                                <Form.Control style={{ width: '50%' }} type="text" placeholder="Search by expense type, location and amount" value={this.state.amount} onChange={this.handleChange} />
                                <Button className="ml-2" variant="secondary" type="submit">Search</Button>
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row>

                    </Row>
                </Container>

            </div>
        )
    }
}

export default Search