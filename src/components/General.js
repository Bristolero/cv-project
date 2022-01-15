import React from "react";
import GeneralView from "./GeneralView";

class General extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Ayy",
            email: "Morgan.Blackhand@gmail.com",
            phone: "+1 234 4567890",
            address: "Las Vegas, NV, United States",
            github: "Bristolero",
        }
    }

    render () {

        const { name, email, phone, address, github } = this.state;

        return (
            <div>
                <GeneralView name={name} email={email} phone={phone} address={address} github={github}/> 
            </div>
    )};
}

export default General;