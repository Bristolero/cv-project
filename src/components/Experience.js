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
                showButtons: false,
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
                showButtons: this.state.company.showButtons,
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
                showButtons: this.state.company.showButtons,
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
                showButtons: this.state.company.showButtons,
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
                showButtons: this.state.company.showButtons,
            },
            companies: this.state.companies.map(company => {
              if(company.id === value) {
                return Object.assign({}, company, {[e.target.name]: e.target.value })
              }
              return company;
            })
          })
    }

    enableButtons = (value) => {
        this.setState({
            company: {       
                name: this.state.company.name,
                id: this.state.company.id,
                positionTitle: this.state.company.positionTitle,
                jobDescription: this.state.company.jobDescription,
                startDate: this.state.company.startDate,
                endDate: this.state.company.endDate,
                editMode: this.state.company.editMode,   
                showButtons: false,
            },
            companies: this.state.companies.map(company => {
                if(company.id === value) {
                  return Object.assign({}, company, { showButtons: true })
                }
                return company;
            })
        })
    }

    disableButtons = (value) => {
        this.setState({
            company: {    
                name: this.state.company.name,
                id: this.state.company.id,
                positionTitle: this.state.company.positionTitle,
                jobDescription: this.state.company.jobDescription,
                startDate: this.state.company.startDate,
                endDate: this.state.company.endDate,
                editMode: this.state.company.editMode,      
                showButtons: false,
            },
            companies: this.state.companies.map(company => {
                if(company.id === value) {
                  return Object.assign({}, company, { showButtons: false })
                }
                return company;
            })
        })
    }

    render () {
        const { companies } = this.state;
        return (
            <div className="experience-container">
                <ExperienceView companyList={companies} deleteCompany={this.deleteCompany}  editCompany={this.handleChange} startEdit={this.startEdit} addCompany={this.addCompany} enableButtons={this.enableButtons} disableButtons={this.disableButtons}/>
            </div>
        )
    }
}

export default Experience;