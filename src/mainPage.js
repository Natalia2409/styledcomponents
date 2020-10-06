import React from "react";
import App from "./components/app/signInPage.js";
import SignUp from "./components/app/signUpPage.js";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";

function MainPage() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/">
              <Redirect to="/signin" />
          </Route>
          <Route path="/signin" component={App}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={App} />
          </Switch>
      </HashRouter>
    );
}

export default MainPage;