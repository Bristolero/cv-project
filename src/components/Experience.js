import React from "react";

class Experience extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            company: {
                name: "",
                positionTitle: "",
                jobDescription: "",
                startDate: "",
                endDate: "",
            },
            companies: []
        }
    } 

    render () {
        return <div></div>
    }
}

export default Experience;