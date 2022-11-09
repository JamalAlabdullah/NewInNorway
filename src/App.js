import React, { Component } from 'react';
import { Route , Switch, Redirect} from 'react-router-dom';
import {ToastContainer}  from 'react-toastify';
import jwtDecode from 'jwt-decode';

import ContactUs from './Pages/contactUs';
import HomePage from './Pages/homePage';
import AboutUs from './Pages/aboutUs';
import NotFound from './Pages/notFound';
import NavBar from './Layouts/navBar';
import Footer from './Layouts/footer';

import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Logout from './components/logout';


import 'react-toastify/dist/ReactToastify.css';
import './App.css';



import Immigrant from './Pages/immigrant';
import SportPage from './Pages/sportPage';
import WeatherPage from './Pages/weatherPage';
import JobPage from './Pages/jobPage';
import HealthPage from './Pages/healthPage';
import PoliticPage from './Pages/politicPage';
import Education from './Pages/educationPage';
import TrafficPage from './Pages/trafficPage';

import SocialPage from './Pages/socialPage';






class App extends Component {

  state={};
  // in this method we get our jsonWebToken from the loclastorage, decodet it to get hte 
  //current user and then update the state. and we need to downlaod jwt-decode@2.2.0d
  componentDidMount() {
    try {
      const jwt = localStorage.getItem('token');
      const user = jwtDecode(jwt);
     this.setState({user});  
    } catch (ex) {
      
    }
  };
  render(){
    return (
      <React.Fragment>
        <ToastContainer/>
        <NavBar  user= {this.state.user}/>
        <main className='container'>
        <Switch>
        <Route path="/loginForm"  component={LoginForm}/>
        <Route path="/logout"  component={Logout}/>


        <Route path="/immigrant"  component={Immigrant}/>
        <Route path="/sportPage"  component={SportPage}/>
        <Route path="/weatherPage"  component={WeatherPage}/>
        <Route path="/jobPage"  component={JobPage}/>
        <Route path="/healthPage"  component={HealthPage}/>
        <Route path="/politicPage"  component={PoliticPage}/>
        <Route path="/educationPage"  component={Education}/>
        <Route path="/trafficPage"  component={TrafficPage}/>
        <Route path="/socialPage"  component={SocialPage}/>





        <Route path="/contactUs" component={ContactUs}/>
        <Route path="/aboutUs" component={AboutUs}/>
        <Route path="/footer" component={Footer}/>
        <Route path="/register" component={RegisterForm}/>
        <Route path="/homePage"  component={HomePage}/>
       
       

        <Route path="/not-found"  component={NotFound}/>
        <Redirect from="/" exact to="/homePage"/>
        <Redirect to="/not-found"/>
        </Switch>
        </main>
       
        <Footer />
       
      </React.Fragment>
  );
}
}

export default App;
