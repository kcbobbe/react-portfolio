import React from "react";
import "../assets/css/style.css"


const styles = {
  whitetext: {
    color: "white",
    fontSize: "20px"
  },
  pinktext: {
    color: "lightpink"
  }
}

class Footer extends React.Component {
  render() {
    return(
<footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col s6">
          <h5 className="white-text">Contact</h5>
          <div className="row">
            <div className="col">
              <a href="https://github.com/kcbobbe"><i className="fab fa-github" style={styles.whitetext}></i></a>
            </div>
            <div className="col">
              <a href="https://www.linkedin.com/in/kcbobbe/"><i className="fab fa-linkedin"
                  style={styles.whitetext}></i></a>
            </div>
            <div className="col">
              <a href="https://www.linkedin.com/in/kcbobbe/"><i className="material-icons"
                  style={styles.whitetext}>email</i></a>
            </div>
            <div className="col">
              <a href="https://www.linkedin.com/in/kcbobbe/"><i class="material-icons"
                  style={styles.whitetext}>phone</i></a>
            </div>
          </div>
        </div>
        <div className="col s6">
          <h5 className="white-text">Projects</h5>
          <ul>
            <li>
              <a href="#" style={styles.pinktext}>BandiFi</a>
            </li>
            <li>
              <a href="#" style={styles.pinktext}>Q-seum</a>
            </li>
            <li>
              <a href="#" style={styles.pinktext}>Weather Dashboard</a>
            </li>
            <li>
              <a href="#" style={styles.pinktext}>Memory Cards</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    )
  }
}

export default Footer