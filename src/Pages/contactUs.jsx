import React, { Component } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";



class ContactUs extends Component {



    sendContact(){
        console.log("call server");
    }


  render() {
    return (
      <div>
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>

          <p className="text-center w-responsive mx-auto mb-5">
            If you have any questions or suggestions, please do not hesitate to
            contact us
          </p>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
              
                <div className="row" style={{marginBottom:10}}>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmfor="name" className="">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmfor="email" className="">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              

                <div className="row" style={{marginBottom:10}}>
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmfor="subject" className="">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row" style={{marginBottom:10}}>
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmfor="message">Your message</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text text-md-left">
                <button
                  className="btn btn-primary"
                  onClick={this.sendContact}
                >
                  Send
                </button>
              </div>
              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i>
                    <FaMapMarkerAlt />
                  </i>
                  <i className="fa-brands fa-npm"></i>
                  <p>Bredalsveien 16 B , Hønefoss</p>
                </li>

                <li>
                  <i>
                    <FaPhone />
                  </i>
                  <p>+ 47 45 00 16 89</p>
                </li>

                <li>
                  <i>
                    <FaEnvelope />
                  </i>
                  <p>jamal.m.alabdulla@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/** google map */}
        
        
        <div className="mapouter">
          <div
            className="gmap_canvas"
            style={{
              overflow: "hidden",
                paddingBottom:"25.25%",
                position:"relative",
                height:"0",
            }}
          >
            <iframe
              title="myframe"
              id="gmap_canvas"
              style={{
                left:"0",
                top:"0",
                height:"100%",
                width:"100%",
                position:"absolute"
              }}
              src="https://maps.google.com/maps?q=Experis%20AS%20Lakkegata%2053,%200187%20Oslo&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
        {/**-------- */}
      </div>
    );
  }
}

export default ContactUs;
