import React from 'react'
import {Switch, Route} from 'react-router-dom'

import { MainNavbar, Homepage, Cryptocurrencies, CryptoDetails, News, SubNavbar, Footer } from './components';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <div className='app'>
            <Container fluid className="min-vh-100">
                <div className="navbar">
                    <SubNavbar/>
                    <hr/>
                    <MainNavbar/>
                </div>
                <Container className='main'>
                    <Switch>
                      <Route exact path="/">
                        <Homepage/>  
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
                </Container>  
                <div className='footer mt-auto'>
                  <Footer/>
                </div>
        </Container>

    </div>
  )
}

export default App