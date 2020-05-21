import React from "react";
import "../assets/css/style.css"

class Project extends React.Component {
  render(){
    return(
      <div id={this.props.id} className="col s12">
        <div className="card">
          <div className="card-image">
            <img className="materialboxed" src={this.props.img}/>
          </div>
          <div className="card-content">
            <p>{this.props.description}</p>
          </div>
          <div className="card-action">
            <a href={this.props.github}>
              <i className="fab fa-github"></i> GitHub</a>
            <a href="this.props.link">
              <i className="fas fa-external-link-alt"></i> Website</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Project