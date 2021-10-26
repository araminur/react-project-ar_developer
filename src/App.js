import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import HOME from './PAGES/HOME';
import CONTACT from './PAGES/CONTACT';
import ABOUT from './PAGES/ABOUT';
import SERVICE from './PAGES/SERVICE';
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

export default function App() {
  return (
    <>
    <Navbar />
   <Switch>
     <Route exact path="/" component={HOME} />
     <Route exact path="/CONTACT" component={CONTACT} />
     <Route exact path="/SERVICE" component={SERVICE} />
     <Route exact path="/ABOUT" component={ABOUT} />
     <Redirect to="/" />
   </Switch>
   <Footer />
    </>
  )
}
