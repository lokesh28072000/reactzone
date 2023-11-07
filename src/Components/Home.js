import React from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import "./home.css";
import {
  faArrowUpRightFromSquare,
  faCirclePlay,
  faPlus,
  faRotateRight,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import homeimg1 from "./home_hero.png";
import homeimg2 from "./homeimg2.png";

function Home() {
  const [showText, setShowText] = useState(false);

  const handleIconClick = () => {
    setShowText(!showText);
  };
  return (
    <>
      <Container className="containerhome1">
        <img src={homeimg1} alt="img" />
        <h1>
          Create Your Website Today with <span>ZONE</span>
        </h1>

        <br></br>
        <br></br>
        <p>
          The ZONE is built on top of MUI, a powerful library that provides
          flexible, customizable, and easy-to-use components.
        </p>
        <br />
        <br />
        <Button className="buttonmain bg-black border-black">
          Figma workspacehere{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Button>
      </Container>

      <Container className="containerhome2">
        <Row>
          <Col>
            <Card
              className="cardcontainerhome2"
              style={{
                width: "18rem",
                backgroundColor: "rgb(227, 232, 227)",
                border: "none",
              }}
            >
              <Card.Img src={homeimg2} />
              <Card.Body>
                <Card.Text>
                  <p>Get Start</p>
                </Card.Text>
                <Card.Title className="cardtitlecontainerhome2">
                  <h2>
                    The <span>ZONE</span> UI Kit
                  </h2>
                </Card.Title>
                <Card.Text>
                  <p>
                    Modern ui kit to save your time, boost your creativity. Neat
                    and super stylish layout ready to help with your projects
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="containerhome3">
        <div className="containerhome3text">
          <p>UI Interface starter kit</p>
          <h1>Flexible Components</h1>

          <br></br>
          <br></br>
          <p>
            Pre-set components are easy to customize and use. We collected most
            popular elements. Menu, sliders, buttons, inputs etc. are all here.
            Just dive in!
          </p>
          <br />
          <br />
          <Button className="buttonmain bg-black border-black">
            Browse Components
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Button>
        </div>

        <div className="d-flex flex-wrap card2maincontainerhome3">
          <Card style={{ width: "28rem" }} className="m-2">
            <Card.Body>
              <Card.Title>Top Buttons</Card.Title>
              <Button
                style={{ backgroundColor: "orangered", border: "none" }}
                className="mb-2"
              >
                <FontAwesomeIcon icon={faPlus} /> Add to Cart
              </Button>
              <Button
                style={{ backgroundColor: "black", border: "none" }}
                className="mb-2"
              >
                <FontAwesomeIcon icon={faUpload} /> Upload
              </Button>
              <Button variant="info" className="mb-2">
                <FontAwesomeIcon icon={faCirclePlay} />
              </Button>
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "yellow",
                  fontSize: "20px",
                }}
                className="mb-2"
              >
                <FontAwesomeIcon icon={faRotateRight} />
              </Button>
              <Card.Title>Middle Buttons</Card.Title>
              <Button variant="info" className="mb-2">
                Button 5
              </Button>
              <Button variant="warning" className="mb-2">
                Button 6
              </Button>
              <Button variant="light" className="mb-2">
                Button 7
              </Button>
              <Card.Title>Bottom Buttons</Card.Title>
              <Button variant="dark" className="mb-2">
                Button 8
              </Button>
              <Button variant="outline-primary" className="mb-2">
                Button 9
              </Button>
            </Card.Body>

            <Card style={{ width: "14rem", border: "none" }} className="m-2">
              <Card.Body>
                <Form>
                  <Form.Check
                    type="radio"
                    label="Radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    className="mb-3"
                  />
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Switch"
                    className="mb-3"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Checkbox"
                    className="mb-3"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Card>
        </div>
      </Container>

      <Container fluid className="containerhome4">
        <div className="text-center">
          <p>PROFESSIONAL KIT</p>
          <h1>For Designer</h1>
          <br />
          <br />
          <Button variant="dark">Work space</Button>
        </div>
      </Container>

      <Container className="containerhome5">
        <div className="text-center">
          <p>Check out our pricing</p>
          <h1>Flexible Pricing Plans</h1>
          <br />
          <p>Choose a plan that works best for your business.</p>
        </div>
        <div className="cardcontainerhome5 d-flex justify-content-around mt-5">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Basic Plan</Card.Title>
              <Card.Text>$9.99</Card.Text>
              <Button className="buttonmain bg-black border-black">
                Select
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Standard Plan</Card.Title>
              <Card.Text>$19.99</Card.Text>
              <Button className="buttonmain bg-black border-black">
                Select
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Premium Plan</Card.Title>
              <Card.Text>$29.99</Card.Text>
              <Button className="buttonmain bg-black border-black">
                Select
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <Container fluid className="containerhome6 text-center">
        <h1>Frequently Asked Questions</h1>
        <p>Here are some common questions about our product.</p>

        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>What is inside the product packages </p>
            <FontAwesomeIcon
              icon={faPlus}
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={handleIconClick}
            />
          </div>
          {showText && (
            <p
              style={{
                marginTop: "10px",
                backgroundColor: "#f9f9f9",
                padding: "10px",
                border: "1px solid #ddd",
              }}
            >
              Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere
              vulputate arcu. Donec mi odio, faucibus at, scelerisque quis,
              convallis in,
            </p>
          )}
        </div>
      </Container>
    </>
  );
}

export default Home;
