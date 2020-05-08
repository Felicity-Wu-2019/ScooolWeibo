import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './app.less';

import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage';
import Header from './components/Header';

export default function App() { 
    return(
        <Router>
        <div className="App">
        <Header usename="anonymous" />
        <section className="page-content container-fluid">
        <Route exact path="/" component={HomePage} />
        <Route path="/account/profile/:id" component={ProfilePage} />
        </section>
        </div>
        </Router>
    );
 }

 