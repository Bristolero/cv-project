import React from "react";
import '../styles/footer.css';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component {
    render() {
        return (
            <footer>Made by Bristolero <a href="https://github.com/Bristolero" target="_blank" rel="noreferrer"> 
                <FontAwesomeIcon icon={faGithubSquare} size="2x" color="white"/></a>
            </footer>
        )
    }
}

export default Footer;