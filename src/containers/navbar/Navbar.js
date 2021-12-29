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
          <h1 className = {'navbarLogo'}><i className='fas fa-fish'> 093914361</i></h1>
            <ul className = {'nav-menu'}>
              <li>
                <Link to="/Products">Ապրանքներ</Link>
              </li>
              <li>
                <Link to="/Services">Ծառայություններ</Link>
              </li>
              {/* <li>
                <Link to="/About">Մենք</Link>
              </li>
              <li>
                <Link to="/ContactUs">Կապ մեզ հետ</Link>
              </li> */}
              <li>
                <Link to='/Login'>Լոգին</Link>
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