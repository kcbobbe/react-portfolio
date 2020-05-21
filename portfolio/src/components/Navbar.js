import React from "react";
import "../assets/css/style.css"

class Navbar extends React.Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Katie Bobbe</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/projects">Projects</a></li>
            {/* <li><a href="awards">Awards</a></li>
            <li><a href="contact">Contact</a></li> */}
            <li><a href="https://github.com/kcbobbe"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/kcbobbe/"><i className="fab fa-linkedin"></i></a></li>
          </ul>
      </div>
    </nav>
    )
  }
}

export default Navbar