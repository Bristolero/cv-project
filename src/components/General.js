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
            showView: true,
        }
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(e) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    startEdit = () => {
        console.log("Edit")
        this.setState({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            github: this.state.github,
            showView: false,
        })
    }

    render () {
        const { name, email, phone, address, github } = this.state;
        return (
            <div className ="general-container">
                <h2 className="cv-header">CV: {name}</h2>
                {this.state.showView ? 
                <GeneralView name={name} email={email} phone={phone} address={address} github={github} editValues={this.startEdit}/> :
                <form className="edit-form" onSubmit={this.submit}>
                    <label htmlFor="nameInput">Name: </label>
                    <input onChange={this.handleChange} value={name} name="name" type="text" id="nameInput"></input>
                    <label htmlFor="emailInput">E-Mail: </label>
                    <input onChange={this.handleChange} value={email} name="email" type="text" id="emailInput"></input>
                    <label htmlFor="PhoneInput">Phone: </label>
                    <input onChange={this.handleChange} value={phone} name="phone" type="text" id="PhoneInput"></input>
                    <label htmlFor="addressInput">Address: </label>
                    <input onChange={this.handleChange} value={address} name="address" type="text" id="addressInput"></input>
                    <label htmlFor="githubInput">Github: </label>
                    <input onChange={this.handleChange} value={github} name="github" type="text" id="githubInput"></input>
                    <button>Edit</button>
                </form>
                }               
            </div>
        )
    };
}

export default General;