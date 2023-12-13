import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { toast } from "react-toastify";

const Login = () => {
  
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userPsw, setUserPsw] = useState("");

  // Function that handles the login process.
  const loggedIn = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/product-list", { replace: true });
      toast.success("you have successfully login")
    }
  };
  // Validates user input fields.
  const validate = () => {
    let result = true;
    if (userName === "" || userName === null) {
      result = false;
      toast.warning("Enter Your Email....");
    }
    if (userPsw === "" || userPsw === null) {
      result = false;
      toast.warning("Enter Your Password....");
    }
    return result;
  };

  return (
    <div className="App-header">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Card className="rounded-0">
              <CardHeader>
                <h5 className="text-dark mb-0">
                  Welcome Back Our Valuable Customer
                </h5>
                <small className="text-dark fw-semibold">
                  Please Login to Continue...
                </small>
              </CardHeader>
              <CardBody>
                <form action="" onSubmit={loggedIn} method="post">
                  <div className="mb-3">
                    <label for="" className="from-label fw-semibold">
                      User Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="" className="from-label fw-semibold">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={userPsw}
                      onChange={(e) => setUserPsw(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn btn-dark">
                      Submit
                    </button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
