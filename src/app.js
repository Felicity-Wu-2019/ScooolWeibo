import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './app.less';

import ProfilePage from './components/ProfilePage';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import HomePageContainer from './home/HomePageContainer';
import Navigationbar from './components/Navigationbar';

export default function App(props) { 
    return(
        <Router>
        <div className="App">
        <Navigationbar />
        <Header />   
        <p>{props.progress}</p>
        <section className="page-content container-fluid">
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/account/profile/:id" component={ProfilePage} />
        <Route exact path="/account/login" component={LoginPage} />
        </section>
        </div>
        </Router>
    );
 }

 