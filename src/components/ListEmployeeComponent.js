import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import EmployeeAxiosServices from "../services/EmployeeAxiosServices";

const TableComponent = () => {
  const [empList, setEmpList] = useState([]);
  const history = useHistory();

  const fetchEmployee = () => {
    EmployeeAxiosServices.getEmployees()
      .then((response) => setEmpList(response.data))
      .catch((err) => alert(err));
  };

  function addEmployee() {
    history.push("/add-employee");
  }

  function editEmployee(employeeId) {
    history.push(`/update-employee/${employeeId}`);
  }

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <div>
      <h2 className="text-center">Employee List</h2>
      <Button variant="primary" onClick={addEmployee}>
        Add Employee
      </Button>
      <div className="row">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {empList.map((emp) => {
              return (
                <tr key={emp.id}>
                  <td>{emp.employeeId}</td>
                  <td>{emp.employeeName}</td>
                  <td>{emp.employeeEmail}</td>
                  <td>{emp.employeeAddress}</td>
                  <td>{emp.employeeAge}</td>
                  <td>
                    <Button
                      onClick={() => editEmployee(emp.employeeId)}
                      variant="primary"
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableComponent;
