import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap"; //importing multiple elements {}

const Search = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Search for new image..." />
              </Col>
              <Col>
                <Button variant="warning" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
