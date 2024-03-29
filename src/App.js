import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';


import LandingPage from "./pages/LandingPage";
import DetailPage from "./pages/DetailPage";
import Checkout from "./pages/Checkout";
import Example from "pages/Example";
import NotFound from "pages/404";

import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/properties/:id" component={DetailPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/example" component={Example} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
