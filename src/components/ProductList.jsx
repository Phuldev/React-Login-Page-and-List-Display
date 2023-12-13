import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  // Fetch data when the component mounts.
  useEffect(() => {
    fetch("http://localhost:3001/product").then((result) => {
      result.json().then((res) => {
        console.log("result", res);
        setProductData(res);
      });
    });
  }, []);
  
  return (
    <Container>
      <Row className="pt-5 g-3 g-md-3">
        {/* Start::Catogory */}
        <Col md={3}>
          <Accordion
            className="rounded-0 accordion-sticky pt-5"
            defaultActiveKey="0"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header className="rounded-0">
                <p className="mb-0 fw-bold">Category</p>
              </Accordion.Header>
              <Accordion.Body className="rounded-0">
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between py-1">
                    <span>Mobile Devices</span>
                    <span>25</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>Wearables</span>
                    <span>20</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>TVs, Set Top Boxes, Monitors</span>
                    <span>50</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>Laptops, Tablets, Computers</span>
                    <span>75</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>Computers, Printers, Scanners</span>
                    <span>35</span>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <p className="mb-0 fw-bold">Availability</p>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between py-1">
                    <span>Mobile Devices</span>
                    <span>25</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>Wearables</span>
                    <span>20</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>TVs, Set Top Boxes, Monitors</span>
                    <span>50</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>Laptops, Tablets, Computers</span>
                    <span>75</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>Computers, Printers, Scanners</span>
                    <span>35</span>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <p className="mb-0 fw-bold">Brand</p>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between py-1">
                    <span>Mobile Devices</span>
                    <span>25</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>Wearables</span>
                    <span>20</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>TVs, Set Top Boxes, Monitors</span>
                    <span>50</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>Laptops, Tablets, Computers</span>
                    <span>75</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>Computers, Printers, Scanners</span>
                    <span>35</span>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <p className="mb-0 fw-bold">Price</p>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between py-1">
                    <span>Mobile Devices</span>
                    <span>25</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>Wearables</span>
                    <span>20</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>TVs, Set Top Boxes, Monitors</span>
                    <span>50</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>Laptops, Tablets, Computers</span>
                    <span>75</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>Computers, Printers, Scanners</span>
                    <span>35</span>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        {/* End::Catogory */}
        {/* Start::Product List */}
        <Col md={9} className="pt-5">
          {productData.map((record) => (
            <Card
              data-aos="zoom-in"
              className="rounded-0 border-0 cardHover bg-light mb-3"
            >
              <CardBody>
                <Row className="align-items-start g-3">
                  <Col md="4">
                    <img
                      className="rounded-2 w-100 cover"
                      src={record.product_image}
                      alt={record.product_name}
                    />
                  </Col>
                  <Col md="8">
                    <div>
                      <h5 className="titleHover">{record.product_name}</h5>
                      <p>{record.product_description}</p>
                      <div className="d-flex gap-2">
                        <button className="btn rounded-0 btn-outline-dark">
                          Rs.{record.product_price}
                        </button>
                        <button className="btn rounded-0 btn-dark">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
        </Col>
        {/* End::Product List */}
      </Row>
    </Container>
  );
};

export default ProductList;
