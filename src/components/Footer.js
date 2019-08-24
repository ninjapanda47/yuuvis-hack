import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid className="m-0">
                    <Row>
                        <Col className="footer">
                            <p>© 2019 Team Thundercats</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer
