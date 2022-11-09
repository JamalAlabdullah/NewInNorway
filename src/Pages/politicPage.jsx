import React, {useState} from 'react';

import historyNorwayImage from "../Assets/politicalImages/historyNorwayImage.jpg";
import parliamentImage from "../Assets/politicalImages/parliament.jpg";
import politicalLifeImage from "../Assets/politicalImages/politicalLifeImage.jpg";
import politicalsPartiesImage from "../Assets/politicalImages/politicalsParties.jpg";







function PoliticPage () {
    const [partyState, setPartyState] = useState("");
    const [politicalLifeState, setpoliticalLifeState] = useState("");
    const [historyState, setHistoryState] = useState("");
    
    
    return (
        <div >
            <div>
             <h1>Politic</h1>
             <h3>Regime</h3>
            <h5>   Kingdom of Norway, is a Nordic country in Northern Europe............................
               </h5>
            <h3>Politicals Parties</h3>
            <h5> Kingdom of Norway, is a Nordic country in Northern Europe.......................</h5>

            <h3>History</h3>
                <img  style ={{maxWidth:'100%'}} src={parliamentImage} alt="Norwegian Parliament"></img>

                </div>
        {/** -----------------------------------------------------------------------------------*/}
        <div className="row row-cols-1 row-cols-md-3">
             <div className="col mb-4 col-sm-6">
                 <div className="card" style={{margin:'10px'}}>
                     <div className="card-header">
                          <img style ={{maxWidth:'100%'}}src={politicalsPartiesImage} alt="#"></img>
                     </div>
                          <div className="card-body" >
                             <h2 className="title" style={{fontSize:25}}>Political Parties</h2>
                           <select
                              className="custom-select"
                              value={partyState}
                              onChange={(e) => {
                              const selectedParty= e.target.value;
                              setPartyState(window.location=(selectedParty)); }} >
                           <option>Select... </option>
                           <option value="https://roedt.no/">Rødt Party</option>
                           <option value="https://www.sv.no/">SV Party</option>
                           <option value="https://hoyre.no/">Høyre Party</option>
                           <option value="https://www.senterpartiet.no/">Senter Party</option>
                           <option value="https://www.mdg.no/">Miljøpartiet De Grønne </option>
                           <option value="https://www.frp.no/">Fremskrittspartiet</option>
                           <option value="https://www.venstre.no/">Venstre Party</option>
                           <option value="https://www.arbeiderpartiet.no/">Arbeider Party</option>
                         </select>
                      </div>
                </div>
             </div>
       
        {/** -----------------------------------------------------------------------------------*/}

        {/** -----------------------------------------------------------------------------------*/}
      
             <div className="col mb-4 col-sm-6">
                 <div className="card" style={{margin:'10px'}}>
                     <div className="card-header">
                          <img style ={{maxWidth:'100%'}}src={politicalLifeImage} alt="#"></img>
                     </div>
                          <div className="card-body" >
                             <h2 className="title" style={{fontSize:25}}>Political Life In Norway</h2>
                           <select
                              className="custom-select"
                              value={politicalLifeState}
                              onChange={(e) => {
                              const selectedPoitical= e.target.value;
                              setpoliticalLifeState(window.location=(selectedPoitical)); }} >
                           <option>Select... </option>
                           <option value="choice 1">choice 1</option>
                           <option value="choice 2">choice 2</option>
                           <option value="choice 3">choice 3</option>
                          
                         </select>
                      </div>
                </div>
             </div>
  
        {/** -----------------------------------------------------------------------------------*/}

        {/** -----------------------------------------------------------------------------------*/}
       
             <div className="col mb-4 col-sm-6">
                 <div className="card" style={{margin:'10px'}}>
                     <div className="card-header">
                          <img style ={{maxWidth:'100%'}}src={historyNorwayImage} alt="#"></img>
                     </div>
                          <div className="card-body" >
                             <h2 className="title" style={{fontSize:25}}>History</h2>
                           <select
                              className="custom-select"
                              value={historyState}
                              onChange={(e) => {
                              const selectedHistory= e.target.value;
                              setHistoryState(window.location=(selectedHistory)); }} >
                           <option>Select... </option>
                           <option value="choice 1">choice 1</option>
                           <option value="choice 2">choice 2</option>
                           <option value="choice 3">choice 3</option>
                         </select>
                      </div>
                </div>
             </div>
        
        {/** -----------------------------------------------------------------------------------*/}

        </div>
        </div>
      );

}
 
export default PoliticPage;

