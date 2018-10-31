import React from 'react';
import './Aboutme.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

const Aboutme = props => {

   return (
       <div>
           
           <br></br>
           <header className="name">Walid Boubguira</header>

           <br></br>
           
           <h4>Full Stack Web Developer Who Possess An MBA With A Marketing Concentration. <br></br> Speaks Arabic, French, English and Expert in Javascript, Node Js, Express, React Js, and Down to Database Including MySQL, and MongoDB.  </h4>
<br></br>
           <a href="https://github.com/walidbillel"> <AwesomeButton type="github" ><i className="fab fa-github"></i> Github</AwesomeButton> </a>
           <a href="https://www.linkedin.com/in/walid-boubguira-89219462/"> <AwesomeButton type="linkedin"><i className="fab fa-linkedin"></i> LinkedIn</AwesomeButton> </a>

           

           
       </div>
   )
}

export default Aboutme;