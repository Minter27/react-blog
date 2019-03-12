import React, { Component } from 'react';
import { Navbar, Nav, } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Home from './screens/Home'
import Posts from './screens/Posts'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="primary">
            <Navbar.Brand href="/">Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/posts">Posts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact component={Home} />
          <Route path="posts" component={Posts} />
        </div>
      </Router>
    )
  }
}

export default App;
