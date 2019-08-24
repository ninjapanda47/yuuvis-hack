import React, { Component } from 'react'
import { Container, Row, Button, Card } from 'react-bootstrap';

export class Upload extends Component {
    render() {
        return (
            <div>
                <Container fluid className="m-0">
                    <Row className="mt-5">
                        <Card style={{ width: '50%' }} className="m-auto center">
                            <Card.Body>
                                <Card.Title>Upload receipts</Card.Title>
                                <Card.Text>
                                <input type="file" className="file-select" accept="image/*" />
                                </Card.Text>
                                <Button variant="primary">Submit</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Upload
