import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details">
          <DetailsPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
