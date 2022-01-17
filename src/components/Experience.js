import React from "react";
import ExperienceView from "./ExperienceView";
import uniqid from "uniqid"

class Experience extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            company: {
                name: "",
                id: uniqid(),
                positionTitle: "",
                jobDescription: "",
                startDate: "",
                endDate: "",
                editMode: false,
            },
            companies: []
        }
    } 

    addCompany = (e) => {
        e.preventDefault();
        this.setState({
            company: {
                name: this.state.company.name,
                id: uniqid(),
                positionTitle: this.state.company.positionTitle,
                jobDescription: this.state.company.jobDescription,
                startDate: this.state.company.startDate,
                endDate: this.state.company.endDate,
                editMode: false,
            },
            companies: this.state.companies.concat(this.state.company)
        });
    }

    deleteCompany = (value) => {
        this.setState({
            company: {
                name: this.state.company.name,
                id: uniqid(),
                positionTitle: this.state.company.positionTitle,
                jobDescription: this.state.company.jobDescription,
                startDate: this.state.company.startDate,
                endDate: this.state.company.endDate,
                editMode: false,
            },
            companies: this.state.companies.filter(company => company.id !== value),
            
        })
    };

    startEdit = (value) => {
        this.setState({
            company: {
                name: this.state.company.name,
                id: this.state.company.id,
                positionTitle: this.state.company.positionTitle,
                jobDescription: this.state.company.jobDescription,
                startDate: this.state.company.startDate,
                endDate: this.state.company.endDate,
                editMode: false,
            },
            companies: this.state.companies.map(company => {
                if(company.id === value) {
                    return Object.assign({}, company, {editMode: !company.editMode })
                }
                return company;
            })
        })
    }

    handleChange = (e, value) => {
        e.preventDefault();
        console.log(e.target.name)
        this.setState({ 
            company: {
                name: this.state.company.name,
                id: this.state.company.id,
                positionTitle: this.state.company.positionTitle,
                jobDescription: this.state.company.jobDescription,
                startDate: this.state.company.startDate,
                endDate: this.state.company.endDate,
                editMode: this.state.company.editMode,
            },
            companies: this.state.companies.map(company => {
              if(company.id === value) {
                return Object.assign({}, company, {[e.target.name]: e.target.value })
              }
              return company;
            })
          })
    }

    render () {
        const { companies } = this.state;
        return (
            <div>
                <button className="btn-add" onClick={this.addCompany}>Add Station</button>
                <ExperienceView companyList={companies} deleteCompany={this.deleteCompany} editCompany={this.handleChange} startEdit={this.startEdit}/>
            </div>
        )
    }
}

export default Experience;