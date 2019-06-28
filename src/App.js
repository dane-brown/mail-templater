import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

// Views
import Templater from "./views/Templater";
import Scheduler from "./views/Scheduler";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Templater} />
      <Route exact path="/schedule" component={Scheduler} />
    </Router>
  );
}

export default App;
