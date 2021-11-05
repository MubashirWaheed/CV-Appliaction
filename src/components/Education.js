import React, {Component} from "react";
import educationStyles from "../styles/education.module.css"
import generalInfo from "../styles/generalInfo.module.css"
class Education extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            disabled: false,
            submitBtnDisable: false
        }
    } 

    submitted = (event)=>{
        event.preventDefault();
        // make Inputs unslectable after submit
        if(this.state.submitBtnDisable) return
        this.setState({
            // Input disabler
            disabled: true,
            // Btn Disabler
            submitBtnDisable:true
        })
        console.log(this.props.school);
    }
    editForm = (event)=>{
        event.preventDefault();
        if(this.state.submitBtnDisable === false) return
        this.setState({
            disabled: false,
            submitBtnDisable: false
        })
    }

    render(){
        return(
            <form action="#" typeof="submit" onSubmit={this.submitted}>
                <div className={educationStyles.row}>
                    <div className={`${educationStyles['flex-ver']}`}>
                        <label htmlFor="school-name">School Name</label>
                        <input 
                            type="text" 
                            name="school" 
                            id="school-name" 
                            placeholder="Enter school name"
                            autoComplete= "off"
                            required ="required"
                            disabled = {(this.state.disabled)? "disabled" : ""}
                            onChange={this.props.handleChange}/>
                    </div>
                    <div className={`${educationStyles['flex-ver']}`}>
                        <label htmlFor="title">Degree title</label>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Enter Degree title" 
                            required="required"
                            id="title" 
                            disabled = {(this.state.disabled)? "disabled" : ""}
                            onChange={this.props.handleChange}/>
                    </div>
                </div>
                <div className={educationStyles.row}>
                    <div>
                        <label htmlFor="year-complete">Year in which degree complteted</label>
                        <input 
                            type="date" 
                            name="yearComplete" 
                            required="required"
                            id="complteDate" 
                            className={educationStyles.completeDate} 
                            disabled = {(this.state.disabled)? "disabled" : ""}
                            onChange={this.props.handleChange} />
                    </div>
                </div>
                <div className={`${generalInfo['general-submit-btn']}`}>
                    <button className={generalInfo.btn}  type="submit">Submit</button>
                    <button className={generalInfo.btn} onClick={this.editForm}>Edit</button>
                </div>
            </form>
        )
    }
}
export default Education