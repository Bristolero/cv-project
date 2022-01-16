import React from "react";
import GeneralView from "./GeneralView";
import '../styles/general.css'

class General extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Ayy",
            email: "Morgan.Blackhand@gmail.com",
            phone: "+1 234 4567890",
            address: "Las Vegas, NV, United States",
            github: "Bristolero",
            showView: false,
        }
    }

    submit = (e) => {
        e.preventDefault()
        this.setState({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            github: this.state.github,
            showView: true,
        })
    }

    render () {
        const { name, email, phone, address, github } = this.state;
        return (
            <div>
                {this.state.showView ? 
                <GeneralView name={name} email={email} phone={phone} address={address} github={github}/> :
                <form className="edit-form" onSubmit={this.submit}>
                    <label htmlFor="nameInput">Name: </label>
                    <input onChange={this.handleChange} value={name} type="text" id="nameInput"></input>
                    <label htmlFor="emailInput">E-Mail: </label>
                    <input onChange={this.handleChange} value={email} type="text" id="emailInput"></input>
                    <label htmlFor="PhoneInput">Phone: </label>
                    <input onChange={this.handleChange} value={phone} type="text" id="PhoneInput"></input>
                    <label htmlFor="addressInput">Address: </label>
                    <input onChange={this.handleChange} value={address} type="text" id="addressInput"></input>
                    <label htmlFor="githubInput">Github: </label>
                    <input onChange={this.handleChange} value={github} type="text" id="githubInput"></input>
                    <button>First Edit</button>
                </form>
                }               
            </div>
        )
    };
}

export default General;