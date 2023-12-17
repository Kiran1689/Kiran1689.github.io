import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Experience from "../pages/experience/Experience";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              <Home {...props} theme={this.props.theme} />
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/opensource"
            render={(props) => (
              <Opensource {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}