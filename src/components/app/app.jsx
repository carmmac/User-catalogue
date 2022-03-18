import React from "react";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Sort from "../sort/sort";
import UserList from "../user-list/user-list";
import UserProfile from "../user-profile/user-profile";
import "./app.scss";

const App = () => {
  return (
    <>
      <div className="page">
        <div className="wrapper">
          <Sort />
          <BrowserRouter>
            <Switch>
              <Route exact path={`/`}>
                <UserList />
              </Route>
              <Route exact path={`/profile`}>
                <UserProfile />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;
