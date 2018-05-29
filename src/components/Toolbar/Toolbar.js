import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Toolbar.css';
import Scheduler from '../Scheduler/Scheduler';
import HBDPromo from '../HBDPromo/HBDPromo';
import AddScreen from '../AddScreen/AddScreen';
import PromoLoop from '../PromoLoop/PromoLoop';
import PowerSettings from '../PowerSettings/PowerSettings';

import {Icon, Navbar} from 'react-materialize';

const BasicExample = () => (
  <Router>
    <div >
      <Navbar className="Toolbar">
        <li>
          <Link to="/">
            <Icon className="material-icons left">search</Icon>Look for screen
          </Link>
        </li>
            
        <li>
          <Link to="/scheduler">
            <Icon className="material-icons left">access_time</Icon> Scheduler
          </Link>
        </li>
            
        <li>
          <Link to="/promoHBD">
            <Icon className="material-icons left">cake</Icon>Birthday Promo 
          </Link>
        </li> 
            
        <li>
          <Link to="/addScreen">
            <Icon className="material-icons left">add_circle</Icon> Add Screen
          </Link>
        </li> 
            
        <li>
          <Link to="/promoLoop">
            <Icon className="material-icons left">cached</Icon>Loop Promo
          </Link>
        </li> 
            
        <li>
          <Link to="/powerONOFF">
            <Icon className="material-icons left">power_settings_new</Icon>Power Settings
          </Link>
        </li>
      </Navbar>

       <hr />

      <Route exact path="/" component={Home} />
      <Route path="/Scheduler" component={Scheduler} />
      <Route path="/addScreen" component={AddScreen} />
      <Route path="/promoHBD" component={HBDPromo} />
      <Route path="/promoLoop" component={PromoLoop} />
      <Route path="/powerONOFF" component={PowerSettings} />

    </div>

  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
      including versions of Lorem Ipsum
    </p>
    
  </div>
);


export default BasicExample;