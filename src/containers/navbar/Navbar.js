import './Navbar.css';
import React  from 'react';
import About from './about/About';
import Login from '../admin/Login/Login';
import Services from './services/Services';
import ContactUs from './contact us/ContactUs';
import Products from '../components/Product/Product'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const Navbar = () =>{
  
    return(
        <Router>
        <div>
          <nav className = {'navbarItems'}>
          <h1 className = {'navbarLogo'}><i className='fas fa-paw'></i></h1>
            <ul className = {'nav-menu'}>
              <li className ={'item.cName'}>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact us</Link>
              </li>
              <li>
                <Link to='/Login'>Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/Products'>
              <Products/>
            </Route>
            <Route path="/Services">
              <Services/>
            </Route>
            <Route path="/About">
              <About/>
            </Route>
            <Route path="/ContactUs">
              <ContactUs/>
            </Route>
            <Route path ="/Login">
              <Login/>
            </Route>
          
            <Route path="/">
              <div>Home component</div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default Navbar;