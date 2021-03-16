import React from 'react';

import Nav from './components/nav/nav.component';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import ContactPage from './pages/contact-page/contact-page.component';
import Footer from "./components/footer/footer.component";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  
  return (
    <div>
      <Router>
      <Nav />
      <Switch>
      
      <Route path="/" 
      exact>
          <Homepage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />     
        </Route> 
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
