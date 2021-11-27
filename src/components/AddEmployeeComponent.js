import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import EmployeeAxiosServices from "../services/EmployeeAxiosServices";

const AddEmployeeComponent = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeAddress, setEmployeeAddress] = useState("");
  const [employeeAge, setEmployeeAge] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = {
      employeeName,
      employeeEmail,
      employeeAddress,
      employeeAge,
    };

    EmployeeAxiosServices.addEmployee(employee)
      .then((response) => {
        if (response.status === 201) {
          history.push("/employees");
        } else {
          alert("Something went wrong while Adding New Employee");
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
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-goup">
                  <label>Employee Name</label>
                  <input
                    placeholder="Name"
                    name="employeeName"
                    className="form-control"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                  />
                </div>
                <div className="form-goup">
                  <label>Employee Email</label>
                  <input
                    placeholder="Email"
                    name="employeeEmail"
                    className="form-control"
                    value={employeeEmail}
                    onChange={(e) => setEmployeeEmail(e.target.value)}
                  />
                </div>
                <div className="form-goup">
                  <label>Employee Address</label>
                  <input
                    placeholder="Address"
                    name="employeeAddress"
                    className="form-control"
                    value={employeeAddress}
                    onChange={(e) => setEmployeeAddress(e.target.value)}
                  />
                  <div className="form-goup">
                    <label>Employee Age</label>
                    <input
                      placeholder="Age"
                      name="employeeAge"
                      className="form-control"
                      value={employeeAge}
                      onChange={(e) => setEmployeeAge(e.target.value)}
                    />
                  </div>
                </div>
                <Button variant="primary" type="submit">
                  Add Employee
                </Button>{" "}
                <Button variant="danger" onClick={cancelRegistration}>
                  Cancel
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
