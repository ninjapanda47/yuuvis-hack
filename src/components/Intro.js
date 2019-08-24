import React, { Component } from 'react'
import { Container, Row, Jumbotron, Button } from 'react-bootstrap';

export class Intro extends Component {
    render() {
        return (
            <div>
                <Container fluid className="m-0">
                    <Row className="mt-5">
                        <Jumbotron className="m-auto" style={{ width: '75%' }}>
                            <h1>Welcome to Itemize</h1>
                            <p>
                                A simple application to help you track and itemize all your expenses.
                            </p>
                            <p>Joseph was here</p>
                            <p>
                                <Button variant="primary">Learn more</Button>
                            </p>
                        </Jumbotron>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Intro
