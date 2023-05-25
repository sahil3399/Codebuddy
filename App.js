// import Router from './Router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Form1} />
        <Route exact path="/form1" component={Form2} />
        <Route exact path="/form1/form2" component={Form3} />
      </Switch>
    </Router>
  </div>
);

export default App;
