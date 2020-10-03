import {React, BrowserRouter as Router, Switch, Route } from 'libraries';
import { appRoutes } from 'routes';

class App extends React.Component {
  render(){
    return (
      <>
        <Router>
          <Switch>
            {appRoutes.map(route => <Route {...route}/>)}
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
