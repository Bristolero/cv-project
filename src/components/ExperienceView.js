import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"

class ExperienceView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience-container">
                {this.props.companyList.map((company) => {
                    if(company.editMode) {
                        return (                   
                            <div key={company.id} className="company-wrapper">
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
                        <div key={company.id} className="company-wrapper">
                            <button className="btn-delete" onClick={() => this.props.deleteCompany(company.id)}><FontAwesomeIcon icon={faTrash}/></button>
                            <button className="btn-edit" onClick={() => this.props.startEdit(company.id)}><FontAwesomeIcon icon={faEdit}/></button>
                            <div className="name-wrapper">
                                <p>Name: {company.name}</p>
                            </div>
                            <div className="position-wrapper">
                                <p>Position: {company.positionTitle}</p>
                            </div>
                            <div className="description-wrapper">
                                <p>Additional Info: {company.jobDescription}</p>
                            </div>
                            <div className="date-wrapper">
                                <p>From: {company.startDate} - {company.endDate} </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default ExperienceView;