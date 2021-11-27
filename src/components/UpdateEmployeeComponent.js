import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Row, Card, Form } from "react-bootstrap";
import EmployeeAxiosServices from "../services/EmployeeAxiosServices";

const UpdateEmployeeComponent = ({ match }) => {
  const employeeId = match.params.id;
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeAddress, setEmployeeAddress] = useState("");
  const [employeeAge, setEmployeeAge] = useState("");

  const [emp, setEmp] = useState([]);
  const history = useHistory();

  useEffect(() => {
    EmployeeAxiosServices.getEmployeeById(employeeId)
      .then((response) => {
        setEmp(response.data);
      })
      .catch((err) => alert(err));
  }, [employeeId]);

  useEffect(() => {
    setEmployeeName(emp.employeeName);
    setEmployeeEmail(emp.employeeEmail);
    setEmployeeAddress(emp.employeeAddress);
    setEmployeeAge(emp.employeeAge);
  }, [emp]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = {
      employeeName,
      employeeEmail,
      employeeAddress,
      employeeAge,
    };

    EmployeeAxiosServices.updateEmployee(employeeId, employee)
      .then((response) => {
        if (response.status === 200) {
          history.push("/employees");
        } else {
          alert("Something went wrong while Updating Employee");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  function cancelRegistration() {
    history.push("/employees");
  }
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Card className="d-grid gap-3">
            <h3 className="text-center">Update Employee</h3>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group as={Row}>
                  <Form.Label>Employee Name</Form.Label>
                  <Form.Control
                    placeholder="Name"
                    name="employeeName"
                    className="form-control"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label>Employee Email</Form.Label>
                  <Form.Control
                    placeholder="Email"
                    name="employeeEmail"
                    className="form-control"
                    value={employeeEmail}
                    onChange={(e) => setEmployeeEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label>Employee Address</Form.Label>
                  <Form.Control
                    placeholder="Address"
                    name="employeeAddress"
                    className="form-control"
                    value={employeeAddress}
                    onChange={(e) => setEmployeeAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label>Employee Age</Form.Label>
                  <Form.Control
                    placeholder="Age"
                    name="employeeAge"
                    className="form-control"
                    value={employeeAge}
                    onChange={(e) => setEmployeeAge(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Row}>
                  <Button variant="primary" type="submit">
                    Update Employee
                  </Button>{" "}
                  <Button variant="danger" onClick={cancelRegistration}>
                    Cancel
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateEmployeeComponent;
