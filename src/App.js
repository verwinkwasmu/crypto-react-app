import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'

import { MainNavbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <div className='app'>
            <Container fluid>
                <div className="navbar">
                    <MainNavbar/>
                </div>
                <div className='main'>
                    <Switch>
                      <Route exact path="/">
                        <Homepage/>  
                      </Route>
                      <Route exact path="/exchanges">
                        <Exchanges/>  
                      </Route>
                      <Route exact path="/cryptocurrencies">
                        <Cryptocurrencies/>  
                      </Route>
                      <Route exact path="/crypto/:coinId">
                        <CryptoDetails/>  
                      </Route>
                      <Route exact path="/news">
                        <News/>  
                      </Route>
                    </Switch>
                </div>  
                <div className='footer'>
                
                </div>
        </Container>

    </div>
  )
}

export default App