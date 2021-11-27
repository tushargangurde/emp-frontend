import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <NavbarComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route
              path="/add-employee"
              component={AddEmployeeComponent}
            ></Route>
            <Route
              path="/update-employee/:id"
              component={UpdateEmployeeComponent}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
