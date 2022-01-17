import React from "react";

class GeneralView extends React.Component{

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="general-container">
                <div className="nameWrapper">
                    <p>Name: {this.props.name}</p>
                </div>
                <div className="emailWrapper">
                    <p>Email: {this.props.email}</p>
                </div>
                <div className="phoneWrapper">
                    <p>Phone: {this.props.phone}</p>
                </div>
                <div className="addressWrapper">
                    <p>Address: {this.props.address}</p>
                </div>
                <div className="githubWrapper">
                    <p>Github: {this.props.github}</p>
                </div>   
                <button onClick={this.props.editValues}>Start Edit</button>        
            </div>
        )   
    }
}

export default GeneralView