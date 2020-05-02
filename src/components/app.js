/* eslint-disable react/jsx-no-comment-textnodes */
// change require to es6 import style
import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import YouTube from './youtube';


const About = (props) => {
  return <div> All there is to know about me </div>;
};


const Welcome = (props) => {
  return <div>Welcome</div>;
};


const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};


const FallBack = (props) => {
  return <div>URL Not Found</div>;
};


// eslint-disable-next-line import/prefer-default-export
export const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />      {/* set components on page for a given url, components get some props automatically */}
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route exact path="/youtube" component={YouTube} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};


const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>      {/* take us to new url */}
        <li><NavLink to="/about">About</NavLink></li>   {/* take us to new url */}
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
        <li><NavLink to="/youtube" exact>YouTube</NavLink></li>
      </ul>
    </nav>
  );
};
