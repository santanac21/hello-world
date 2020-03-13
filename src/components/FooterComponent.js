import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import "../custom.css"

function FooterComponent() {
    return (
        <React.Fragment>
            <Container bsPrefix="custom-container">
                <Row>
                    <Col sm className="p-5">
                        <h4>Footer Content</h4>
                        <p>Lorem ipsum dolor sit amet, ius id probo legimus. 
                        Facer reprimique id sea. Ad laoreet antiopam laboramus vis, munere iuvaret copiosae quo id. Sed solet postea appareat in.</p>

                    </Col>
                    <Col sm className="p-5">
                    <h4>Footer Content</h4>
                        <p>Lorem ipsum dolor sit amet, ius id probo legimus. 
                        Facer reprimique id sea. Ad laoreet antiopam laboramus vis, munere iuvaret copiosae quo id. Sed solet postea appareat in.</p>
                    </Col>
                    <Col sm className="p-5">
                    <h4>Footer Content</h4>
                        <p>Lorem ipsum dolor sit amet, ius id probo legimus. 
                        Facer reprimique id sea. Ad laoreet antiopam laboramus vis, munere iuvaret copiosae quo id. Sed solet postea appareat in.</p>
                    </Col>
                </Row>
                <Row>
                    <Col id="content-creator">
                        <h7>Made by Carlos Santana</h7>
                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    )
}

export default FooterComponent
