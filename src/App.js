import './App.css';
import Home from './Components/Home'
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {


  return (
    <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
    
    </div>
  );
}

export default App;
