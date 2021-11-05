import React, {Component} from "react";
import educationStyles from "../styles/education.module.css"
import generalInfo from "../styles/generalInfo.module.css"
class Education extends Component{

    submitted = (event)=>{
        event.preventDefault();
        // make Inputs unslectable after submit
        console.log(this.props.school);
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
                            onChange={this.props.handleChange}/>
                    </div>
                    <div className={`${educationStyles['flex-ver']}`}>
                        <label htmlFor="title">Degree title</label>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Enter Degree title" 
                            id="title" 
                            onChange={this.props.handleChange}/>
                    </div>
                </div>
                <div className={educationStyles.row}>
                    <div>
                        <label htmlFor="year-complete">Year in which degree complteted</label>
                        <input 
                            type="date" 
                            name="yearComplete" 
                            id="complteDate" 
                            className={educationStyles.completeDate} 
                            onChange={this.props.handleChange} />
                    </div>
                </div>
                <div className={`${generalInfo['general-submit-btn']}`}>
                    <button className={generalInfo.btn}  type="submit">Submit</button>
                    <button className={generalInfo.btn}>Edit</button>
                </div>
            </form>
        )
    }
}
export default Education