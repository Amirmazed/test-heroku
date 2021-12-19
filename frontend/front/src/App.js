
import './App.css';
import {BrowserRouter as Router,  Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen.js';
import { Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import { useState } from 'react';


function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div className="app">
      <Router>
      <Navbar click={() => setSideToggle(true)}></Navbar>
      <SideDrawer show={sideToggle}  click={() => setSideToggle(false)}></SideDrawer>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}></Backdrop>
    
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>

          <Route exact path="/product/:id" component={ProductScreen}></Route>

          <Route exact path="/cart" component={CartScreen}></Route>
        </Switch>
      </main>
      </Router>
    </div>
  );
}

export default App;
