//@ts-check
import React, { useEffect, useContext } from "react";
import { Alert, Carousel, Card, Col, Container, Row } from "react-bootstrap";
import AuthContext from "../context/auth/authContext";
import Title from "../components/Title";
import FeaturesCard from "../components/FeaturesCard";


const HomePage = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    document.title = "Home | BookMyVenue";
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Container className="py-4 px-6">
        <Alert variant="info" className="text-center">
          <span className="font-weight-bold">
            !!!! IMPORTANT: New Updates!{" "}
          </span>
          {" "}
          <span className="font-weight-bold">!!!!</span>
        </Alert>
        <Carousel className="shadow-lg p-3 mb-2 mt-3 bg-white">
          <Carousel.Item>
            <img
              loading="lazy"
              className="d-block w-100 rounded"
              style={{ maxHeight: "500px" }}
              src="/assets/carousel1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              loading="lazy"
              className="d-block w-100 rounded"
              style={{ maxHeight: "500px" }}
              src="/assets/carousel2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              loading="lazy"
              className="d-block w-100 rounded"
              style={{ maxHeight: "500px" }}
              src="/assets/carousel3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              loading="lazy"
              className="d-block w-100 rounded"
              style={{ maxHeight: "500px" }}
              src="/assets/carousel4.jpg"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container style={{ paddingBottom: "20px" }}>
        <Row className="pt-4 pb-2">
          <Col md className="wrapper m-2">
            <FeaturesCard
              cardTitle="FEATURES OF AUDITORIUM"
              feature1="Seating for 250"
              feature2="Fully Air Conditioned"
              feature3="Podium Available"
              feature4="Green Room Available"
            />
          </Col>
          <Col md className="wrapper m-2">
            <FeaturesCard
              cardTitle="FEATURES OF TURF"
              feature1="5v5 turf"
              feature2="Cricket Pitch Available"
              feature3="Flood Lights Available"
              feature4="Changing Room and Sports Equipment Available"
            />
          </Col>
        </Row>
      </Container>
      <Title title="ABOUT SFIT" />
      <Container style={{ paddingBottom: "40px" }}>
        <Row className="pt-4 pb-2">
          <Col md className="wrapper m-2">
            <Card className="border-0 shadow-sm bg-white rounded">
              <Card.Img
                variant="top"
                alt="college"
                height="271px"
                loading="lazy"
                src="/assets/building.jpeg"
              />
            </Card>
          </Col>
          <Col md className="wrapper m-2">
            <FeaturesCard
              cardTitle="LOCATION DETAILS"
              feature1="Mount Poinsur, S.V.P. Road, Borivali (West), Mumbai 400 103."
              feature2="2 minutes distance from S.V.P.Road"
              feature3="10 minutes distance from dahisar Railway Station"
              feature4="5km from "
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
