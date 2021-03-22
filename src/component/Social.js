import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const Social = () => {
    return (
        <div id="contact">
        <Jumbotron className="contact-jumbotron">
            <Row>
            <Col className="d-flex justify-content-center flex-wrap">
                <div className="m-2">
                <a href="mailto:m.saliou90@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-danger" title="Saint-loma96@gmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                    </Button>
                </a>
                </div>
                <div className="m-2">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-primary" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                    </Button>
                </a>
                </div>
                
                <div className="m-2">
                <a href="https://github.com/saliouvj" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                    </Button>
                </a>
                </div>
                <div className="m-2">
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <Button id="youtube-btn" variant="outline-info" title="Lets code together!">
                    <i class="fab fa-youtube"></i> Youtube
                    </Button>
                </a>
                </div>
                <div className="m-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-info" title="Tweets are welcomed!">
                    <i className="fab fa-twitter"></i> Twitter
                    </Button>
                </a>
                </div>
                <div className="m-2">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-primary" title="Say hello on FB">
                    <i className="fab fa-facebook-square"></i> FaceBook
                    </Button>
                </a>
                </div>
            </Col>
            </Row>
        </Jumbotron>
        </div>
    );
};

export default Social;