import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Client/Login/Login";
import AddService from "./components/Admin/AddService/AddService";
import ServiceList from "./components/Admin/ServiceList/ServiceList";
import Order from "./components/Client/Order/Order";
import ClientServiceList from "./components/Client/ClientServiceList/ClientServiceList";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Review from "./components/Client/Review/Review";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/client/order/:id">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/client/order">
            <Order/>
          </PrivateRoute>
          <PrivateRoute path="/client/serviceList">
            <ClientServiceList />
          </PrivateRoute>
          <PrivateRoute path="/client/review">
            <Review/>
          </PrivateRoute>
          <Route exact path="/admin">
            <ServiceList />
          </Route>
          <Route path="/admin/addService">
            <AddService />
          </Route>
          <Route path="/admin/makeAdmin">
            <MakeAdmin/>
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
