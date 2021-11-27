import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeAxiosServices {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL + "/getAll");
  }

  addEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL + "/save", employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/get/" + employeeId);
  }

  updateEmployee(employeeId, employee) {
    return axios.patch(
      EMPLOYEE_API_BASE_URL + "/update/" + employeeId,
      employee
    );
  }
}

export default new EmployeeAxiosServices();
