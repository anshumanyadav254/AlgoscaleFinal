import './App.css';
import Landingpage from './Components/Landingpage';
//import UserList from './Components/UserList';

import {BrowserRouter ,Switch,Route} from 'react-router-dom'

import Contact from './Components/Contact'
import Analytic from './Components/Analytic';

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        {/* <Route path="/"> */}
        <Route exact path="/" component={Landingpage}/>

    
        <Route exact path="/contact" component={Contact}/>

        <Route exact path="/analytics" component={Analytic}/>


        
        </Switch>
        
    </BrowserRouter>
    
    
  );
}

export default App;
