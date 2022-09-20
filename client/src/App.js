import react from "react";

import { Switch, Route } from "react-router-dom";
import Login from './components/Auth/Login'
import SignIn from './components/Auth/SignIn'
import Projects from './components/Projects/Projects'

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
  );
}

export default App;
