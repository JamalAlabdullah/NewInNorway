import React, { Component } from "react";
import "./homePage.css"

import educationImage from "../Assets/HomePageImages/education.jpg";
import healthImage from "../Assets/HomePageImages/health.jpg";
import imigrantImage from "../Assets/HomePageImages/imigrant.jpg";
import jobImage from "../Assets/HomePageImages/job.jpg";
import politicalImage from "../Assets/HomePageImages/political.jpg";
import socialImage from "../Assets/HomePageImages/social.jpg";
import sportImage from "../Assets/HomePageImages/sport.jpg";
import traficImage from "../Assets/HomePageImages/trafic.jpg";
import weatherImage from "../Assets/HomePageImages/weather.jpg";



class HomePage extends Component {

  handleImagrintPage() {window.location='/immigrant';}
  handlesSportPage() {window.location='/sportPage';}
  handlesWeatherPage() {window.location='/weatherPage';}
  handlesPoliticsPage() {window.location='/politicPage';}
  handlesEducationPage() {window.location='/educationPage';}
  handleSocialPage() {window.location='/socialPage';}
  handleJobPage() {window.location='/jobPage';}
  handleTraficPage() {window.location='/trafficPage';}
  handleHealthPage() {window.location='/healthPage';}
 
 
 
  
  render() {


   
    return <div> 
       <div className="row row-cols-1 row-cols-md-3">
        <div className="col mb-4 col-sm-6">
        <div className="card m" style={{margin:'10px'}}>
          <div className="card-header">
            <img style ={{maxWidth:'100%'}}src={imigrantImage} alt="#"></img>
          </div>
          <div className="card-body" >
            <h2 className="title" style={{fontSize:25}}>New Refugee Life</h2>
            <p className="card-text">You will find here all what you need about your new life in Norway...</p>
            <button className="btn bt" onClick={this.handleImagrintPage}>
              Read more
            </button>
          </div>
        </div>
        </div>

        <div className="col mb-4 col-sm-6">
        <div className="card m" style={{margin:'10px'}}>
          <div className="card-header">
            <img style ={{maxWidth:'100%'}}src={sportImage} alt="#"></img>
          </div>
          <div className="card-body" >
            <h2 className="title" style={{fontSize:25}}>Sport</h2>
            <p className="card-text">Go and discover the most popular sports in Norway... <br/></p>
            <button className="btn bt" onClick={this.handlesSportPage}>
              Read more
            </button>
          </div>
        </div>
        </div>

        <div className="col mb-4 col-sm-6">
        <div className="card m" style={{margin:'10px'}}>
          <div className="card-header">
            <img style ={{maxWidth:'100%'}}src={weatherImage} alt="#"></img>
          </div>
          <div className="card-body" >
            <h2 className="title" style={{fontSize:25}}>Weather</h2>
            <p className="card-text">Norway is a cold Scandinavian country,so maybe you need to check the weather where you go... </p>
            <button className="btn bt" onClick={this.handlesWeatherPage}>
              Read more
            </button>
          </div>
        </div>
        </div>

        <div className="col mb-4 col-sm-6">
        <div className="card m" style={{margin:'10px'}}>
          <div className="card-header">
            <img style ={{maxWidth:'100%'}}src={politicalImage} alt="#"></img>
          </div>
          <div className="card-body" >
            <h2 className="title" style={{fontSize:25}}>Politics</h2>
            <p className="card-text">Are you interested in political life in Norway? just go and find out how it is. </p>
            <button className="btn bt" onClick={this.handlesPoliticsPage}>
              Read more
            </button>
          </div>
        </div>
        </div>

        <div className="col mb-4 col-sm-6">
        <div className="card m" style={{margin:'10px'}}>
          <div className="card-header">
            <img style ={{maxWidth:'100%'}}src={educationImage} alt="#"></img>
          </div>
          <div className="card-body" >
            <h2 className="title" style={{fontSize:25}}>Education</h2>
            <p className="card-text">All about studying in Norway, or how you can get recognition for your education...</p>
            <button className="btn bt" onClick={this.handlesEducationPage}>
              Read more
            </button>
          </div>
        </div>
        </div>

        <div className="col mb-4 col-sm-6">
        <div className="card m" style={{margin:'10px'}}>
          <div className="card-header">
            <img style ={{maxWidth:'100%'}}src={socialImage} alt="#"></img>
          </div>
          <div className="card-body" >
            <h2 className="title" style={{fontSize:25}}>Social Life</h2>
            <p className="card-text">jamal</p>
            <button className="btn bt" onClick={this.handleSocialPage}>
              Read more
            </button>
          </div>
        </div>
        </div>

        <div className="col mb-4 col-sm-6">
        <div className="card m" style={{margin:'10px'}}>
          <div className="card-header">
            <img style ={{maxWidth:'100%'}}src={jobImage} alt="#"></img>
          </div>
          <div className="card-body" >
            <h2 className="title" style={{fontSize:25}}>Job</h2>
            <p className="card-text">jamal</p>
            <button className="btn bt" onClick={this.handleJobPage}>
              Read more
            </button>
          </div>
        </div>
        </div>

        <div className="col mb-4 col-sm-6">
        <div className="card m" style={{margin:'10px'}}>
          <div className="card-header">
            <img style ={{maxWidth:'100%'}}src={traficImage} alt="#"></img>
          </div>
          <div className="card-body" >
            <h2 className="title" style={{fontSize:25}}>xxxxx</h2>
            <p className="card-text">jamal</p>
            <button className="btn bt" onClick={this.handleTraficPage}>
              Read more
            </button>
          </div>
        </div>
        </div>

        <div className="col mb-4 col-sm-6">
        <div className="card m" style={{margin:'10px'}}>
          <div className="card-header">
            <img style ={{maxWidth:'100%'}}src={healthImage} alt="#"></img>
          </div>
          <div className="card-body" >
            <h2 className="title" style={{fontSize:25}}>Health</h2>
            <p className="card-text">jamal</p>
            <button className="btn bt" onClick={this.handleHealthPage}>
              Read more
            </button>
          </div>
        </div>
        </div>

        
      </div>
    </div>;
  }
}

export default HomePage;
