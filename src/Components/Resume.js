import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">
          <span style={styles.skills}>Python</span>
          <span style={styles.skills}>Java</span>
          <span style={styles.skills}>C/C++</span>
          <span style={styles.skills}>Html5</span>
          <span style={styles.skills}>CSS</span>
          <span style={styles.skills}>Assembly</span>
          <span style={styles.skills}>JavaScript(ES6)</span>
          <span style={styles.skills}>Git & Github</span>
			</div>
      </div>
   </section>
    );
  }
}

const styles = {
  skills:{
    width: 120,
    height: 30,
    flexWrap: 'wrap',
    display: 'inline-flex',
    alignItems: 'center',
    background: "#14191E",
    border: "solid 1px hsla(0, 0%, 100%, 0.641)",
    justifyContent: 'center',
    borderRadius: 4,
    margin: 5,
    color: 'white'
    
    
  }


}

export default Resume;
