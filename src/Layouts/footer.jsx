import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faYoutube,faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {MDBFooter,MDBContainer,MDBCol,MDBRow} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './footer.css';


import logoImage from "../Assets/HomePageImages/logo.png";

class Footer extends Component {

    render() { 
        return (
          <div >

          
            <MDBFooter className='text-center' >
      <MDBContainer className=' footerContainer  p-4'>
       
        <section className=''>
          <MDBRow>
      {/*  Logo section*/}
            <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
              <img className="logo-image"src={logoImage} alt="website logo"/>
             <h6 className="describtion">We try to put between your hands everthing you need to know about your new life in Norway</h6>
               
            </MDBCol>
     {/*  contact section*/}
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase kontakt-title'>Contact</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to="/omOss"className='Link-text-color'>
                About us
                  </Link>
                </li>
                <li>
                  <Link to='/kontaktOss' className='Link-text-color'>
                 Contact us
                  </Link>
                </li>
              </ul>
            </MDBCol>
      {/*  quick links  section*/}
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase lenker-title'>Fast Links</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/' className='Link-text-color'>
                   Home Page
                  </Link>
                </li>
                <li>
                  <Link to='/immigrant' className='Link-text-color'>
                 Refugee Page
                  </Link>
                </li>
                <li>
                  <Link to='/aboutUS' className='Link-text-color'>
                Link 2
                  </Link>
                </li>
               
              </ul>
            </MDBCol>
       {/*  Social media section*/}
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase social-title'>Social Media</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to={{ pathname: "https://www.facebook.com" }} target="_blank" 
                  className=''>
                    <FontAwesomeIcon icon={faFacebook}/>
                  </Link>
                </li>
                <li>
                  <Link to={{ pathname: "https://www.instagram.com" }} target="_blank" 
                  className='insta'>
                  <FontAwesomeIcon icon={faInstagram}/>
                  </Link>
                </li>
                <li>
                  <Link to={{ pathname: "https://www.youtube.com" }} target="_blank" 
                
                  className='text'>
                  <FontAwesomeIcon icon={faYoutube}/>
                  </Link>
                </li>
                <li>
                  <Link to={{ pathname: "https://twitter.com/?lang=en" }} target="_blank" 
                  className=''>
                  <FontAwesomeIcon icon={faTwitter}/>
                  </Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    {/*  copyRight section*/}
      <div className='text-black text-center p-3 copyRight' >
        © 2022 Copyright:
        <Link className='text-black' to='/'>
          NewInNorway.no
        </Link>
      </div>
    </MDBFooter>

    </div>  
        );

      
    }
}
 
export default Footer;





