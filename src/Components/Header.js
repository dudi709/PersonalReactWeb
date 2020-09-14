import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav" style={styles.nav}>
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner" style={styles.title}>
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3 className="responsive-headline" >I am a software engineering student (third year) at Sami Shamoon College Of Engineering - Ashdod. Looking for a job!</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
      </p>

   </header>
    );
  }
}

const styles ={
   h3:{
      color: '#CCCCCC',
      borderBottom: "3px solid rgb(212, 212, 212)",
      width: "385px",
   },
   nav:{
      backgroundColor: 'rgba(0,0,0,0.6)'
   },
   title:{
      maxWidth: '1020px',
      display: 'inline-block',
      verticalAlign: 'middle',
      margin: '0 auto',
      width: '100%',
      paddingBottom: '30px',
      paddingTop:'30px',
      textAlign: 'center',
      borderRadius: '2em',
      backgroundColor: 'rgba(0,0,0,0.6)'
      
   }
}

export default Header;
