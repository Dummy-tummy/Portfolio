import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
function Foother() {
    return (
        <footer className="bg-light text-center py-3">
            <Container>
                <hr className="my-4" />
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <a href="https://github.com/ZaveriAum" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub size={30} className="mx-3" />
                        </a>
                        <a href="https://www.linkedin.com/in/aumzaveri/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin size={30} className="mx-3" />
                        </a>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col>
                        <p className="mb-0">Aum Zaveri @2024</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Foother