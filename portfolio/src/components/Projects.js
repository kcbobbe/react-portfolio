import React from "react";
import "../assets/css/style.css"


const styles = {
  paddingright1 : {
    paddingLeft: "0",
    paddingRight: "1em"
  },
  displaynone : {
    display: "none"
  }
}

class Project extends React.Component {
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
          <div id="project-swipe-1" className="col s12">
            <div className="card">
              <div className="card-image">
                <img className="materialboxed" src="../assets/images/code-query.png"/>
              </div>
              <div className="card-content">
                <p>A place for web development beginners to ask questions and help peers in a friendly environment</p>
                <div className="chip-holder">
                  <div className="chip">Node.js</div>
                  <div className="chip">mySQL</div>
                  <div className="chip">Handlebars</div>
                  <div className="chip">Sequelize</div>
                  <div className="chip">Socket.io</div>
                  <div className="chip">Markdown.it</div>
                  <div className="chip">Simple MDE</div>
                  <div className="chip">Heroku</div>
                </div>
              </div>
              <div className="card-action">
                <a href="https://github.com/kcbobbe/code-query"><i className="fab fa-github"></i> GitHub</a>
                <a href="https://code--query.herokuapp.com/"><i className="fas fa-external-link-alt"></i> Website</a>
              </div>
            </div>

          </div>

          <div id="project-swipe-2" className="col s12">

            <div className="card">
              <div className="card-image">
                <img className="materialboxed" src="assets/images/bandifi.png"/>
              </div>
              <div className="card-content">
                <p>Discover events, top songs, and related artists of your favorite bands.</p>
                <div className="chip-holder">
                  <div className="chip">JavaScript</div>
                  <div className="chip">HTML</div>
                  <div className="chip">CSS</div>
                  <div className="chip">jQuery</div>
                  <div className="chip">Bulma</div>
                  <div className="chip">Bandsintown API</div>
                  <div className="chip">iTunes Search API</div>
                  <div className="chip">TasteDive API</div>
                  <div className="chip">Moment.js</div>
                </div>
              </div>
              <div className="card-action">
                <a href="https://github.com/kcbobbe/bandifi"><i className="fab fa-github"></i> GitHub</a>
                <a href="https://kcbobbe.github.io/bandifi"><i className="fas fa-external-link-alt"></i> Website</a>
              </div>
            </div>
          </div>

          <div id="project-swipe-3" className="col s12">
            <div className="card">
              <div className="card-image">
                <img className="materialboxed" src="../assets/images/weather.png"/>
              </div>
              <div className="card-content">
                <p>Check current weather conditions and 5-day weather forecast by location using a simple, clean
                  interface.</p>
                <div className="chip-holder">
                  <div className="chip">JavaScript</div>
                  <div className="chip">HTML</div>
                  <div className="chip">CSS</div>
                  <div className="chip">Bulma</div>
                  <div className="chip">OpenWeather API</div>
                  <div className="chip">Geolocation API</div>
                  <div className="chip">Moment.js</div>
                </div>
              </div>
              <div className="card-action">
                <a href="https://github.com/kcbobbe/weather-dashboard"><i className="fab fa-github"></i> GitHub</a>
                <a href="https://kcbobbe.github.io/weather-dashboard/"><i className="fas fa-external-link-alt"></i>
                  Website</a>
              </div>
            </div>
          </div>



          <div id="project-swipe-4" className="col s12">
            <div className="card">
            {/* style="background-color:rgb(45,45,45)" */}
              <div className="card-image" >
              {/* style="width:80%; margin:auto" */}
                <img className="materialboxed" data-caption="Q-seum" 
                  src="/images/qseum.png"/>
              </div>
              <div className="card-content">
                <p>A mobile-first web application that uses personalized QR codes to support a more pleasant and
                  efficient check-in experience for museum members and visitors.</p>
                <div className="chip-holder">
                  <div className="chip">JavaScript</div>
                  <div className="chip">HTML</div>
                  <div className="chip">CSS</div>
                  <div className="chip">Bulma</div>
                  <div className="chip">React</div>
                  <div className="chip">Firebase</div>
                </div>
              </div>
              <div className="card-action">
                <a href="https://github.com/Q-seum/qseum-frontend"><i className="fab fa-github"></i> GitHub</a>
                <a href="https://q-seum.firebaseapp.com/"><i className="fas fa-external-link-alt"></i> Website</a>
              </div>
            </div>
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
          </div>

          <div id="project-swipe-5" className="col s12">
            <div className="card">
              <div className="card-image">
                <img className="materialboxed" src="/images/memory-cards.png"/>
              </div>
              <div className="card-content">
                <p>Share and discuss memories and stories about your favorite video games</p>
                <div className="chip-holder">
                  <div className="chip">JavaScript</div>
                  <div className="chip">HTML</div>
                  <div className="chip">CSS</div>
                  <div className="chip">Firebase</div>
                  <div className="chip">React</div>
                </div>
                <div className="card-action">
                  <a href="https://github.com/kcbobbe/memory-cards"><i className="fab fa-github"></i> GitHub</a>
                  <a href="https://memory-cards-5a4ad.firebaseapp.com/"><i className="fas fa-external-link-alt"></i>
                    Website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    )
  }
}

export default Project