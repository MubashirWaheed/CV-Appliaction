import React , {Component} from "react";
import generalInfoStyles from"../styles/generalInfo.module.css"
import personalStyle from "../styles/personal.module.css"

class Personal extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            disabled: false,
            submitBtnDisable: false
        }
    } 
    submitted = (event)=>{
        event.preventDefault();
        if(this.state.submitBtnDisable) return
        this.setState({
            disabled: true,
            submitBtnDisable:true
        })
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
            <form action="#" className={personalStyle.form} typeof="submit" onSubmit={this.submitted}>
                <div className={generalInfoStyles.row}>
                    <div className={`${generalInfoStyles['flex-ver']}`}>
                        <label htmlFor="company">Company Name</label>
                        <input 
                            type="text" 
                            name="company" 
                            id="companyName" 
                            placeholder="Enter company name" 
                            autoComplete="off"
                            // Value
                            // value="Meta"
                            disabled = {(this.state.disabled)? "disabled" : ""}
                            onChange={this.props.handleChange} />
                    </div>
                    <div className={`${generalInfoStyles['flex-ver']}`}>
                        <label htmlFor="company">Position Title</label>
                        <input 
                            type="text" 
                            name="position" 
                            id="position" 
                            // Remove value
                            // value="CEO"
                            placeholder="Enter position title" 
                            autoComplete="off"
                            disabled = {(this.state.disabled)? "disabled" : ""}
                            onChange={this.props.handleChange} />
                    </div>
                </div>
                <div className={personalStyle.tasks}>
                    <div className={`${generalInfoStyles['flex-ver']}`}>
                        <label htmlFor="tasks">Main tasks</label>
                        <textarea 
                            className={personalStyle.tasksDetail} 
                            name="tasks" 
                            maxLength="240" 
                            // Remove value
                            // value="random garbage"
                            id="tasks" 
                            cols="20" 
                            rows="5" 
                            placeholder="Enter tasks details here"
                            disabled = {(this.state.disabled)? "disabled" : ""}
                            onChange={this.props.handleChange} >
                        </textarea>
                    </div>
                </div>
                <div className={`${generalInfoStyles['general-submit-btn']}`}>    
                    <button className={generalInfoStyles.btn}  
                        type="submit"
                        onClick={this.props.showPersonal}>
                            Submit
                    </button>
                    <button className={generalInfoStyles.btn} onClick={this.editForm}>Edit</button>
                </div>
            </form> 
        )
    }
}
export default Personal