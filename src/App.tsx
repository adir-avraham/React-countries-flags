import './App.css';
import React from 'react';
import AddImage from './components/add-image'
import Navbar from './components/navbar'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CountriesPage from './components/countries-page';
import ImagesPage from './components/images-page'

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
         
        <Switch>
          <Route path="/add-image" component={AddImage} />
          <Route path="/images-page" component={ImagesPage} />
          <Route path="/countries-page" component={CountriesPage} />
          <Route path="**" component={AddImage} />
        </Switch>           
           
      </BrowserRouter>
    </div>
  );
}

export default App;

