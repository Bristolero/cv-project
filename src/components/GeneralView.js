import React, {useState} from "react";
import '../styles/generalView.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit, faEnvelope, faMobile, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

class GeneralView extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            showButton: false,
        }
    }

    enableButton = () => {
        this.setState({
            showButton: true,
        })
    }
    
    disableButton = () => {
        this.setState({
            showButton: false,
        })
    }

    render () {
        return (
            <div className="general-info-wrapper" onMouseOver={this.enableButton} onMouseLeave={this.disableButton}>
                {this.state.showButton &&  <button className="edit-info-btn" onClick={this.props.editValues}><FontAwesomeIcon icon={faEdit} /></button>} 
                <div className="nameWrapper wrapper">
                    <FontAwesomeIcon icon={faUser} color="white" /><p className="name-info">{this.props.name}</p>
                </div>
                <div className="emailWrapper wrapper">
                    <FontAwesomeIcon icon={faEnvelope} color="white" /><p className="email-info">{this.props.email}</p>
                </div>
                <div className="phoneWrapper wrapper">
                    <FontAwesomeIcon icon={faMobile} color="white" /><p className="phone-info">{this.props.phone}</p>
                </div>
                <div className="addressWrapper wrapper">
                    <FontAwesomeIcon icon={faMapMarkedAlt} color="white" /><p className="address">{this.props.address}</p>
                </div>
                <div className="githubWrapper wrapper">
                    <FontAwesomeIcon icon={faGithubSquare} color="white" /><p className="github-info">{this.props.github}</p>
                </div>   
                
            </div>
        )   
    }
}

export default GeneralView