import React, { Component } from 'react'
import { Container, Row, Button, Card } from 'react-bootstrap';
import firebase from '../util/firebase'
import FilerUploader from 'react-firebase-file-uploader'

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
                                {/* <input type="file" className="file-select" accept="image/*" /> */}
                                <FilerUploader accept="image/*" storageRef={storageRef} onUploadSuccess={handleUploadSuccess} />
                                </Card.Text>
                                <Button onClick={handleClick} variant="primary">Submit</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        )
    }
}

const handleClick = () => {}

const handleUploadSuccess = filename => {
    firebase
      .storage()
      .ref('images')
      .child(filename)
      .put()
  };

const storageService = firebase.storage();
const storageRef = storageService.ref();

export default Upload
