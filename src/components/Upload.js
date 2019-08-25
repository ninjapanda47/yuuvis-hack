import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import * as itemAPI from '../utils/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const uuidv4 = require("uuid/v4");

export class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseType: '',
            amount: '',
            filePath: {},
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let value = event.target.value
        let name = event.target.id
        this.setState({ [name]: value });
    }

    onChangeHandler = (event) => {
        const selectedFile = event.target.files[0].name
        this.setState({
            filePath: selectedFile
        })

    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const item = this.state
        if (item.title === '') {
            item.title = uuidv4()
        }
        const upload = await itemAPI.upload(item)
        console.log('upload:', upload)
        upload.success ? this.notifySuccess() : this.notifyError()
    }

    notifySuccess = () => toast("Upload Success!", { className: 'toastSuccess' });
    notifyError = () => toast("Upload was unsuccessful!", { className: 'red' });


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
                                        <Form.Label column sm="3" className="text-left">Expense Type*</Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="text" placeholder="meal" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="amount" value={this.state.amount} onChange={this.handleChange}>
                                        <Form.Label column sm="3" className="text-left">Amount*</Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="text" placeholder="$10.00" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="title" value={this.state.title} onChange={this.handleChange}>
                                        <Form.Label column sm="3" className="text-left">Title - optional</Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="text" placeholder="Chick fil A" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group controlId="filePath" value={this.state.filePath} onChange={this.onChangeHandler}>
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
                <ToastContainer />
            </div>
        )
    }
}

export default Upload
