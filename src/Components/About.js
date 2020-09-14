import React, { Component } from 'react';


class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic" style={styles.profilepic}  src={profilepic} alt="Dudi Biton Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span><a href="mailto:dudi709@gmail.com">dudi709@gmail.com</a></span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={require('../Dudi_biton_CV_en.pdf')} className="button" dowload><i className="fa fa-download" ></i>Download Resume (en)</a>
                     <a href={require('../Dudi_biton_VC_heb.pdf')} className="button" dowload><i className="fa fa-download"></i>Download Resume (heb)</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

const styles ={
   profilepic:{
      borderRadius: '25%'
   }
}

export default About;
