import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

class EducationView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="education-container">
                {this.props.schoolList.map(school => {
                    if(school.editMode) {
                        return (
                            <div key={school.id} className="school-wrapper">
                                <button className="btn-delete" onClick={() => this.props.deleteSchool(school.id)}><FontAwesomeIcon icon={faTrash}/></button>
                                <button className="btn-edit" onClick={() => this.props.startEdit(school.id)}><FontAwesomeIcon icon={faEdit}/></button>
                                <div className="name-wrapper">
                                    <label htmlFor="nameInput">Name: </label>
                                    <input name="name" value={school.name} onChange={(e) => this.props.editSchool(e, school.id)} id="nameInput"></input>
                                </div>
                                <div className="subject-wrapper">
                                    <label htmlFor="subjectInput">subject: </label>
                                    <input name="subject" value={school.subject} onChange={(e) => this.props.editSchool(e, school.id)} id="subjectInput"></input>
                                </div>
                                <div className="date-wrapper">
                                    <label htmlFor="startDateInput">From: </label>
                                    <input name="startDate" value={school.startDate} onChange={(e) => this.props.editSchool(e, school.id)} id="startDateInput"></input>
                                    <label htmlFor="endDateInput">To: </label>
                                    <input name="endDate" value={school.endDate} onChange={(e) => this.props.editSchool(e, school.id)} id="endDateInput"></input>
                                </div>
                            </div>
                        )
                    } else return (
                        <div key={school.id} className="school-wrapper">
                            <button className="btn-delete" onClick={() => this.props.deleteSchool(school.id)}><FontAwesomeIcon icon={faTrash}/></button>
                            <button className="btn-edit" onClick={() => this.props.startEdit(school.id)}><FontAwesomeIcon icon={faEdit}/></button>
                            <div className="name-wrapper">
                                <p>Name: {school.name}</p>
                            </div>
                            <div className="subject-wrapper">
                                <p>Subject: {school.positionTitle}</p>
                            </div>
                            <div className="date-wrapper">
                                <p>From: {school.startDate} - {school.endDate} </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default EducationView;