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

class Main extends React.Component {
  render() {
    return(
    <main class="valign-wrapper" id="mainView">
    <div class="container front-page z-depth-3">
      <div class="section">
        <div class="row valign-wrapper">
          <div class="col" style={styles.paddingright1}>
            <img class="katiepic" src="assets/images/katiepic.jpg"/>
          </div>

          <div class="col">
            <div class="header"><strong>Katie Bobbe</strong></div>
            <div>Associate Software Engineer at Genesys</div>
            <small>Chapel Hill, NC</small>
          </div>
        </div>

        <div class="row">
          <p class="grey-text text-darken-3 lighten-3">
            Full Stack Developer with an eye for design and a track record of creating responsive full stack
            applications using technologies such as HTML, CSS, JavaScript and React. Excels at communication, team
            leadership, and delivering top-notch customer experiences.
          </p>
        </div>

        <div class="row">
        {/* style="padding-left:0; margin-left:0" */}
          <div class="col" >
            <a href="projects.html">
              <strong>View my projects</strong>
            </a>
          </div>
          <div class="col">
            <a role="button" class="contact-button" tabindex="0">
              <strong>Contact Me</strong>
            </a>
          </div>
        </div>
        {/* style="display:none" */}
        <div class="row contact-more" >
          {/* style="padding-left:0; margin-left:0" */}
          <div class="col" >
            <a target="_blank" href="https://github.com/kcbobbe"><i class="fab fa-github"></i> GitHub</a>
          </div>
          {/* style="padding-left:0; margin-left:1em"> */}
          <div class="col" ></div>
            <a target="_blank" href="https://www.linkedin.com/in/kcbobbe/">
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
          {/* style="padding-left:0; margin-left:1em" */}
          <div class="col" >
            <a href="https://www.linkedin.com/in/kcbobbe/"><i class="far fa-envelope"></i> kcbobbe@gmail.com</a>
          </div>
          {/* style="padding-left:0; margin-left:1em" */}
          <div class="col">
            <a href="assets/Bobbe_Resume_2020.pdf"><i class="fas fa-file-download"></i> Resume </a>
          </div>



        </div>
      </div>
  </main>
    )
  }
}

export default Main