import React from "react";
import '../styles/header.css';
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {
    render() {
        return(
            <header>
                <h2>CV Editor <FontAwesomeIcon icon={faPenNib} /></h2>
            </header>
        )
    }
}

export default Header;