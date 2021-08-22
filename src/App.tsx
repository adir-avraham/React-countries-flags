import './App.css';
import React from 'react';
import AddImage from './components/add-image'
import Navbar from './components/navbar'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CountriesPage from './components/countries-page';
import Country from './components/country'
import countriesPage from './components/countries-page';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
         
        <Switch>
          <Route path="/add-image" component={AddImage} />
          <Route path="/countries-page" component={CountriesPage} />
          <Route path="/country/:code" component={Country}/>
          <Route path="**" component={countriesPage} />
        </Switch>           
           
      </BrowserRouter>
    </div>
  );
}

export default App;

