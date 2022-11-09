import React, {Component} from 'react';

import basketballImage from "../Assets/sportImages/basketball.jpg";
import bowlingImage from "../Assets/sportImages/bowling.jpg";
import cyclingImage from "../Assets/sportImages/cycling.jpg";
import footballImage from "../Assets/sportImages/football.jpg";
import runningImage from "../Assets/sportImages/running.jpg";
import skiingImage from "../Assets/sportImages/skiing.jpg";
import swimmingImage from "../Assets/sportImages/swimming.jpg";
import tennisImage from "../Assets/sportImages/tennis.jpg";
import volleyballImage from "../Assets/sportImages/volleyball.jpg";


import "./sportPage.css"



class SportPage extends Component {
    state = {  } 
    render() {

    return <div className='container' style={{marginTop:'40px'}}> 
        <h1>Here are the most popular sports in Norway.</h1>
    <div className="row row-cols-1 row-cols-md-3">
     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}} src={basketballImage}  alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Basketball</h2>

         <button className="btn bt" onClick={this.handleImagrintPage}>
         Read more
         </button>
       </div>
     </div>
     </div>

     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}} src={bowlingImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Bowling</h2>

         <button className="btn bt" onClick={this.handlesSportPage}>
         Read more
         </button>
       </div>
     </div>
     </div>

     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}} src={cyclingImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Cycling</h2>

         <button className="btn bt" onClick={this.handlesWeatherPage}>
         Read more
         </button>
       </div>
     </div>
     </div>

     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}}src={footballImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Football</h2>

         <button className="btn bt" onClick={this.handlesPoliticsPage}>
         Read more
         </button>
       </div>
     </div>
     </div>

     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}}src={runningImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Running</h2>
 
         <button className="btn bt" onClick={this.handlesEducationPage}>
         Read more
         </button>
       </div>
     </div>
     </div>

     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}}src={skiingImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Skiing</h2>

         <button className="btn bt" onClick={this.handleSocialPage}>
         Read more
         </button>
       </div>
     </div>
     </div>

     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}}src={swimmingImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Swimming</h2>
         <button className="btn bt" onClick={this.handleJobPage}>
         Read more
         </button>
       </div>
     </div>
     </div>

     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}}src={tennisImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Tennis</h2> 
         <button className="btn bt" onClick={this.handleTraficPage}>
         Read more
         </button>
       </div>
     </div>
     </div>

     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}}src={volleyballImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Volleyball</h2>

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
 
export default SportPage;