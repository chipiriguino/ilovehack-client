import './App.css';

import {Switch, Route} from 'react-router-dom'

import AnonRoute from "./components/componentRoutes/AnonRoute";
import PrivateRoute from "./components/componentRoutes/PrivateRoute";


import Home from './components/Home/Home.jsx'
import Events from './components/Events/Events.jsx'
import EventDetail from './components/EventDetails/EventDetails.jsx'


function App() {
  return (
    <div className="App">
     <Switch>
      <Route exact path='/' component={Home}/>
      <PrivateRoute exact path='/events' component={Events}/>
      <PrivateRoute exact path='/event/:id' component={EventDetail}/>
     </Switch>
    </div>
  );
}

export default App;
