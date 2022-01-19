import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import '../styles/experienceView.css'

class ExperienceView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showButton: false,
        }

       
    }

    enableButton = () => {
        this.setState({
            showButton: true,
        })
    }

    disableButton = () => {
        this.setState({
            showButton: false,
        })
    }

    render() {
        return (
            <div className="experience-info-wrapper">
                <div className="header-wrapper" onMouseEnter={this.enableButton} onMouseLeave={this.disableButton}>
                    {this.state.showButton && <button className="btn-add" onClick={(e) => this.props.addCompany(e)}><FontAwesomeIcon id="fa-plus" icon={faPlus} size="2x" color="#152238" /></button> }
                    <h3 className="experience-header">Work Experience</h3>
                </div>
                {this.props.companyList.map((company) => {
                    if(company.editMode) {
                        return (                   
                            <div key={company.id} className="company-wrapper" onMouseEnter={() => this.props.enableButtons(company.id)} onMouseLeave={() => this.props.disableButtons(company.id)}>
                                <button className="btn-delete" onClick={() => this.props.deleteCompany(company.id)}><FontAwesomeIcon icon={faTrash}/></button>
                                <button className="btn-edit" onClick={() => this.props.startEdit(company.id)}><FontAwesomeIcon icon={faEdit}/></button>
                                <div className="name-wrapper">
                                    <label htmlFor="nameInput">Name: </label>
                                    <input name="name" value={company.name} onChange={(e) => this.props.editCompany(e, company.id)} id="nameInput"></input>
                                </div>
                                <div className="position-wrapper">
                                    <label htmlFor="positionInput">Position: </label>
                                    <input name="positionTitle" value={company.positionTitle} onChange={(e) => this.props.editCompany(e, company.id)} id="positionInput"></input>
                                </div>
                                <div className="description-wrapper">
                                    <label htmlFor="descriptionInput">Description: </label>
                                    <input name="jobDescription" value={company.jobDescription} onChange={(e) => this.props.editCompany(e, company.id)} id="descriptionInput"></input>
                                </div>
                                <div className="date-wrapper">
                                    <label htmlFor="startDateInput">From: </label>
                                    <input name="startDate" value={company.startDate} onChange={(e) => this.props.editCompany(e, company.id)} id="startDateInput"></input>
                                    <label htmlFor="endDateInput">To: </label>
                                    <input name="endDate" value={company.endDate} onChange={(e) => this.props.editCompany(e, company.id)} id="endDateInput"></input>
                                </div>
                            </div>
                        )
                    }
                    else return (
                        <div key={company.id} className="company-wrapper" onMouseEnter={() => this.props.enableButtons(company.id)} onMouseLeave={() => this.props.disableButtons(company.id)}>
                            {company.showButtons && 
                            <div>
                                <button className="btn-delete" onClick={() => this.props.deleteCompany(company.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                <button className="btn-edit" onClick={() => this.props.startEdit(company.id)}><FontAwesomeIcon icon={faEdit} /></button>
                            </div>}                            
                            <div className="name-date-wrapper">
                                <div className="name-wrapper">
                                    <p>Name: {company.name}</p>
                                </div>
                                <div className="date-wrapper">
                                    <p>From: {company.startDate} - {company.endDate} </p>
                                </div>
                            </div>
                            <div className="position-wrapper">
                                <p>Position: {company.positionTitle}</p>
                            </div>
                            <div className="description-wrapper">
                                <p>Additional Info: {company.jobDescription}</p>
                            </div> 
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default ExperienceView;