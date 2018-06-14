import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// Pages
import Index from "../../pages/Index/Index";
import GameOverview from "../../pages/GameOverview/GameOverview";

// Else
import NotFound from "../../pages/NotFound/NotFound";

const App = props => (
  <Router>
    <div>
      <Switch>
        <Route exact name="index" path="/" component={Index} />

        <Route
          exact
          name="gameOverview"
          path="/:game_id"
          component={GameOverview}
        />

        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
