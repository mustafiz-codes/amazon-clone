import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header'
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            {/* <Product /> */}
          </Route>

        </Switch>

      </div>
    </Router>
  );
}


export default App;


// echo "# amazon-clone" >> README.md



/* React-ROUTER */
/* localhost.com */
/* localhost.com/checkout */
/* localhost.com/login */