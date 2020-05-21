import React from "react";
import "../assets/css/style.css"
import katiepic from "../assets/images/katiepic.jpg"


const styles = {
  paddingright1 : {
    paddingLeft: "0",
    paddingRight: "1em"
  },
  displaynone : {
    display: "none"
  }
}

class Main extends React.Component {
  render() {
    return(
    <main className="valign-wrapper" id="mainView">
    <div className="container front-page z-depth-3">
      <div className="section">
        <div className="row valign-wrapper">
          <div className="col" style={styles.paddingright1}>
            <img className="katiepic" src={katiepic}/>
          </div>

          <div className="col">
            <div className="header"><strong>Katie Bobbe</strong></div>
            <div>Associate Software Engineer at Genesys</div>
            <small>Chapel Hill, NC</small>
          </div>
        </div>

        <div className="row">
          <p className="grey-text text-darken-3 lighten-3">
            Full Stack Developer with an eye for design and a track record of creating responsive full stack
            applications using technologies such as HTML, CSS, JavaScript and React. Excels at communication, team
            leadership, and delivering top-notch customer experiences.
          </p>
        </div>

        <div className="row">
        {/* style="padding-left:0; margin-left:0" */}
          <div className="col" >
            <a href="projects.html">
              <strong>View my projects</strong>
            </a>
          </div>
          <div className="col">
            <a role="button" class="contact-button" tabindex="0">
              <strong>Contact Me</strong>
            </a>
          </div>
        </div>
        {/* style="display:none" */}
        <div className="row contact-more" >
          {/* style="padding-left:0; margin-left:0" */}
          <div class="col" >
            <a target="_blank" href="https://github.com/kcbobbe"><i className="fab fa-github"></i> GitHub</a>
          </div>
          {/* style="padding-left:0; margin-left:1em"> */}
          <div className="col" ></div>
            <a target="_blank" href="https://www.linkedin.com/in/kcbobbe/">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
          {/* style="padding-left:0; margin-left:1em" */}
          <div className="col" >
            <a href="https://www.linkedin.com/in/kcbobbe/"><i className="far fa-envelope"></i> kcbobbe@gmail.com</a>
          </div>
          {/* style="padding-left:0; margin-left:1em" */}
          <div className="col">
            <a href="assets/Bobbe_Resume_2020.pdf"><i className="fas fa-file-download"></i> Resume </a>
          </div>
        </div>
      </div>
  </main>
    )
  }
}

export default Main