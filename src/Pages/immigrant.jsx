import React, {Component} from 'react'

import economyImage from "../Assets/ImigrantsImages/economy.jpg";
import marriageImage from "../Assets/ImigrantsImages/marriage.jpg";
import placeImage from "../Assets/ImigrantsImages/place.jpg";
import residencedocumentImage from "../Assets/ImigrantsImages/residencedocument.jpg";
import studyImage from "../Assets/ImigrantsImages/study.jpg";
import workImage from "../Assets/ImigrantsImages/work.jpg";

import "./immigrant.css"

class Immigrant extends Component {
    state = {  } 
    render() { 
       // return (<h1>Immigrant page </h1>);
       return <div className='container' style={{marginTop:'40px'}}> 
        <h1>Newcomers life in Norway.</h1>
    <div className="row row-cols-1 row-cols-md-3">
     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}}src={residencedocumentImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}> Residence Documents</h2>

         <button className="btn bt" onClick={this}>
          Read more
         </button>
       </div>
     </div>
     </div>

     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}}src={marriageImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Marriage</h2>

         <button className="btn bt" onClick={this}>
         Read more
         </button>
       </div>
     </div>
     </div>

     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}}src={placeImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Property</h2>

         <button className="btn bt" onClick={this}>
         Read more
         </button>
       </div>
     </div>
     </div>

     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}}src={economyImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Economy</h2>
         <button className="btn bt" onClick={this}>
         Read more
         </button>
       </div>
     </div>
     </div>

     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}}src={studyImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Study</h2>
 
         <button className="btn bt" onClick={this}>
         Read more
         </button>
       </div>
     </div>
     </div>

     <div className="col mb-4 col-sm-6">
     <div className="card m" style={{margin:'10px'}}>
       <div className="card-header">
         <img style ={{maxWidth:'100%'}}src={workImage} alt="#"></img>
       </div>
       <div className="card-body" >
         <h2 className="title" style={{fontSize:25}}>Work</h2>

         <button className="btn bt" onClick={this}>
         Read more
         </button>
       </div>
     </div>
     </div>

    

    
     

     
   </div>
 </div>;
    }
}
 
export default Immigrant;