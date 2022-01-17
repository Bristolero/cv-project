import React from "react";
import uniqid from 'uniqid';
import EducationView from "./EducationView";

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            school: {
                name: "",
                id: uniqid(),
                subject: "",
                startDate: "",
                endDate: "", 
                editMode: false,
            },
            schoolList: [],
        }
    }

    addSchool = (e) => {
        e.preventDefault();
        this.setState({
            school: {
                name: this.state.school.name,
                id: uniqid(),
                subject: this.state.school.subject,
                startDate: this.state.school.startDate,
                endDate: this.state.school.endDate,
                editMode: false,
            },
            schoolList: this.state.schoolList.concat(this.state.school)
        });
    }

    deleteSchool = (value) => {
        this.setState({
            school: {
                name: this.state.school.name,
                id: uniqid(),
                subject: this.state.school.subject,
                startDate: this.state.school.startDate,
                endDate: this.state.school.endDate,
                editMode: false,
            },            
            schoolList: this.state.schoolList.filter(school => school.id !== value),
        })
    };

    startEdit = (value) => {
        this.setState({
            school: {
                name: this.state.school.name,
                id: this.state.school.id,
                subject: this.state.school.subject,
                startDate: this.state.school.startDate,
                endDate: this.state.school.endDate,
                editMode: false,
            }, 
            schoolList: this.state.schoolList.map(school => {
                if(school.id === value) {
                    return Object.assign({}, school, {editMode: !school.editMode});
                } return school;
            })
        })
    }

    handleChange = (e, value) => {
        e.preventDefault();
        console.log(e.target.name)
        this.setState({ 
            school: {
                name: this.state.school.name,
                id: this.state.school.id,
                subject: this.state.school.subject,
                startDate: this.state.school.startDate,
                endDate: this.state.school.endDate,
                editMode: this.state.school.editMode,
            }, 
            schoolList: this.state.schoolList.map(school => {
              if(school.id === value) {
                return Object.assign({}, school, {[e.target.name]: e.target.value })
              }
              return school;
            })
          })
    }

    render () {
        const {schoolList} = this.state;
        return (
            <div>
                <button className="btn-add" onClick={this.addSchool}>Add Education</button>
                <EducationView schoolList={schoolList} deleteSchool={this.deleteSchool} editSchool={this.handleChange} startEdit={this.startEdit}/>
            </div>
        )
    }
}

export default Education;