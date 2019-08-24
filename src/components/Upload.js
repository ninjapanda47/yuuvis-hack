import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
// import { useAlert } from 'react-alert'


export class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseType: '',
            amount: '',
            showSuccess: false
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
        this.setState({ showSuccess: true })
    }

    render() {

        return (
            <div>
                <Container fluid className="m-0">
                    <Row className="mt-5">
                        <Card style={{ width: '50%' }} className="m-auto center">
                            <Card.Body>
                                <Card.Title>Upload receipts</Card.Title>
                                <Form style={{ width: '100%' }} onSubmit={this.handleSubmit}>
                                    <Form.Group as={Row} controlId="expenseType" value={this.state.expenseType} onChange={this.handleChange}>
                                        <Form.Label column sm="3" className="text-left">Expense Type</Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="text" placeholder="meal" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="amount" value={this.state.amount} onChange={this.handleChange}>
                                        <Form.Label column sm="3" className="text-left">Amount</Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="text" placeholder="$10.00" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group controlId="title" value={this.state.title} onChange={this.handleChange}>
                                        <Form.Control type="file" accept="image/*" />
                                    </Form.Group>
                                    <div className="col text-center">
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

export default Upload
