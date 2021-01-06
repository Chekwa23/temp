import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import login from './pages/login';
import CandidateSignUpPage from './pages/CandidateSignUpPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={login} />
          <Route path="/CandidateSignUpPage" component={CandidateSignUpPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
