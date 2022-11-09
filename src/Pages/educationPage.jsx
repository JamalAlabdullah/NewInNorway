import React, { Component } from "react";



class Education extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Education</h1>
        <h3>Norwegian language</h3>
        <h5>It's very important for you as a newcomer to Norway to learn the Norwegian language
            .<br/> It will be the number one of the requirements for getting a job or building 
            a new network and having a good social life. </h5>
            <h3>Introductory program</h3>
            <h5>The aim of the introductory program is to give the participants basic skills in Norwegian, 
                and Norwegian social life to<br/>prepare them for work or education.<br/>
                The target group is people between the ages of 18 and 55, they are:<br/>
                <br/>
                <ul>
                    <li>Refugees who have been granted asylum and get a refugee status</li>
                    <li>Transfer refugees</li>
                    <li>Those who have been granted residence on humanitarian grounds</li>
                    <li>The family reunification of the groups mentioned above</li>
                    <li>Persons who have received a residence permit on an independent basis after a breach of cohabitation due to mistreatment in cohabitation</li>
                </ul>
                The refugee will choose from the start of the introductory program if she or he will study or work after learning Norwegian </h5>
                <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4 col-sm-6">
        <div className="card" style={{margin:'10px'}}>
             <div className="card-body" >
            <h2 className="title" style={{fontSize:25}}>Studying</h2>
            <p className="card-text">For those who choose to study, they need to go through some basic high school subjects... <br/></p>
           <br/>
           <br/><a href="https://www.google.com/">Read more </a>
          </div>
        </div>
        </div>

        <div className="col mb-4 col-sm-6">
        <div className="card" style={{margin:'10px'}}>
          <div className="card-body" >
            <h2 className="title" style={{fontSize:25}}>Work</h2>
            <p className="card-text">For those who choose to work, they need to go in practice at the last six monthes of introductory progrm...</p>
            <br/>
            <a href="https://www.google.com/">Read more  </a>
          </div>
        </div>
        </div>

        <div className="col mb-4 col-sm-6">
        <div className="card" style={{margin:'10px'}}>
          <div className="card-body" >
            <h2 className="title" style={{fontSize:25}}>Recognation of education</h2>
            <p className="card-text">Those who have already higher education in their countries, they need recognition of the Norwegian Agency for Quality Assurance in Education. </p>
            <a href="https://www.nokut.no/en/">Read more  </a>
          </div>
        </div>
        </div>


                 </div>
      </div>
    );
  }
}

export default Education;
