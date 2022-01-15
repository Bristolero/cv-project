import React from "react";

class GeneralView extends React.Component{

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="GeneralContainer">
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
            </div>
        )   
    }
}

export default GeneralView