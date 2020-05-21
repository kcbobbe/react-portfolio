import React from "react";
import "../assets/css/style.css"
import codeQuery from '../assets/images/code-query.png'
import bandifi from '../assets/images/bandifi.png'
import weather from '../assets/images/weather.png'
import qseum from '../assets/images/qseum.png'
import memoryCards from '../assets/images/memory-cards.png'
import Project from './Project'


const styles = {
  paddingright1 : {
    paddingLeft: "0",
    paddingRight: "1em"
  },
  displaynone : {
    display: "none"
  }
}

class Projects extends React.Component {
  render() {
    return(
<main>

{/* style="margin-top: 2em;" */}
    <div className="container" >
    {/* style="max-width:700px" */}
      <div className="row" >
      {/* style="padding:0; border-radius: 3px; background-color:rgba(255,255,255,.2)" */}
        <div className="col s12 white z-depth-3"
          >
            {/* style="background-color: rgba(255,255,255,0)" */}
          <ul className="tabs tabs-fixed-width" >
            <li className="tab col s3"><a href="#project-swipe-1"><strong>Code Query</strong></a></li>
            <li className="tab col s3"><a href="#project-swipe-2"><strong>Bandifi</strong></a></li>
            <li className="tab col s3"><a href="#project-swipe-3"><strong>Weather</strong></a></li>
            <li className="tab col s3"><a href="#project-swipe-4"><strong>Q-seum</strong></a></li>
            <li className="tab col s3"><a href="#project-swipe-5"><strong>Memory Cards</strong></a></li>

          </ul>

          <Project 
              img={codeQuery}
              description="A place for web development beginners to ask questions and help peers in a friendly environment"
              github="https://github.com/kcbobbe/code-query"
              link="https://code--query.herokuapp.com/"
              id="project-swipe-1"
            />
          <Project 
            img={bandifi}
            description="Discover events, top songs, and related artists of your favorite bands."
            github="https://github.com/kcbobbe/bandifi"
            link="https://kcbobbe.github.io/bandifi"
            id="project-swipe-2"
          />
          <Project 
            img={weather}
            description="Check current weather conditions and 5-day weather forecast by location using a simple, clean
            interface."
            github="https://github.com/kcbobbe/weather-dashboard"
            link="https://kcbobbe.github.io/weather-dashboard/"
            id="project-swipe-3"
          />

          <Project 
            img={qseum}
            description="A mobile-first web application that uses personalized QR codes to support a more pleasant and
            efficient check-in experience for museum members and visitors."
            github="https://github.com/Q-seum/qseum-frontend"
            link="https://q-seum.firebaseapp.com/"
            id="project-swipe-4"
          />

            {/* <!-- <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="assets/images/planner.png"/>
                </div>
                <div className="card-content">
                  <p>Keep track of your work day with this daily planner.</p>
                  <div className="chip-holder">
                    <div className="chip">JavaScript</div>
                    <div className="chip">HTML</div>
                    <div className ="chip">CSS</div>
                    <div className = "chip">jQuery</div>
                    <div className = "chip">Bootstrap</div>
                    <div className = "chip">Moment.js</div>
                  </div>
                </div>
                <div className="card-action">
                  <a href="https://github.com/kcbobbe/day-planner"><i className="fab fa-github"></i> GitHub</a>
                  <a href="https://kcbobbe.github.io/day-planner/"><i className="fas fa-external-link-alt"></i> Website</a>
                </div>
              </div>  */}
          {/* </div> */}

          <Project 
            img={memoryCards}
            description="Share and discuss memories and stories about your favorite video games"
            github="https://github.com/kcbobbe/memory-cards"
            link="https://memory-cards-5a4ad.firebaseapp.com/"
            id="project-swipe-5"
          />

        </div>
      </div>
    </div>
  </main>
    )
  }
}

export default Projects