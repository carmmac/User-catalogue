import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Sort from "../sort/sort";
import UserList from "../user-list/user-list";
import UserProfile from "../user-profile/user-profile";
import NotFoundPage from "../error-pages/404";
import "./app.scss";

const App = () => {
  return (
    <div className="page">
      <div className="wrapper">
        <Sort />
        <BrowserRouter>
          <Switch>
            <Route exact path={`/`} component={UserList} />
            <Route exact path={`/users/:id`} component={UserProfile} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
