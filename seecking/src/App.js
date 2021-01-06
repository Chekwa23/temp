import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import login from './pages/login';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
