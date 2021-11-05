import React , {Component} from "react";
import generalInfoStyles from"../styles/generalInfo.module.css"
import personalStyle from "../styles/personal.module.css"

class Personal extends Component{

    submitted = (event)=>{
        event.preventDefault();
        // make Inputs unslectable after submit
        console.log(this.props.company);
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
                            onChange={this.props.handleChange} />
                    </div>
                    <div className={`${generalInfoStyles['flex-ver']}`}>
                        <label htmlFor="company">Position Title</label>
                        <input 
                            type="text" 
                            name="position" 
                            id="position" 
                            placeholder="Enter position title" 
                            autoComplete="off"
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
                            id="tasks" 
                            cols="20" 
                            rows="5" 
                            placeholder="Enter tasks details here"
                            onChange={this.props.handleChange} >
                        </textarea>
                    </div>
                </div>
                <div className={`${generalInfoStyles['general-submit-btn']}`}>    
                    <button className={generalInfoStyles.btn}  type="submit">Submit</button>
                    <button className={generalInfoStyles.btn}>Edit</button>
                </div>
            </form> 
        )
    }
}
export default Personal