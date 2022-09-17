import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import Checkout from "./Checkout";
import Pizzakortet from  "./Pizzakortet";

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <Navbar bg="light" variant={"light"} style={{backgroundColor: 'black'}} expand="lg">
                 <Navbar.Brand><Nav.Link style={{textDecoration: 'none', color: '#0B090A', fontSize: '3.5vh'}} as={Link} activeStyle={{ color:'#A4161A' }}  to={"/home"}>Pizzeria Bella</Nav.Link></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
                      <NavLink style={{textDecoration: 'none', fontSize: '3.5vh', color: '#0B090A', marginLeft: '1%'}} activeStyle={{ color:'#A4161A' }} to="/menu">
                      Meny
                    </NavLink>
                    <NavLink style={{textDecoration: 'none', fontSize: '3.5vh', color: '#0B090A', marginLeft: '3%'}} activeStyle={{ color:'#A4161A' }} to="/pizzakortet">
                      Pizzakortet 
                    </NavLink>
                   </Navbar.Collapse>
                  </Navbar>
                <div classname="switches">
                <Switch>
                    <Route path="/menu">
                      <Menu/>
                    </Route>
                    <Route path="/pizzakortet">
                      <Pizzakortet />
                    </Route>
                    <Route path ="/checkout">
                      <Checkout/>
                    </Route>
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                </div>
               </Router>
              )
            }
          }


        