import React, {Component} from "react";
import educationStyles from "../styles/education.module.css"
import generalInfo from "../styles/generalInfo.module.css"
class Education extends Component{
    constructor(props){
        super(props)
        this.state = ""
    }

    render(){
        return(
            <form action="#">
                <div className={educationStyles.row}>
                    <div className={`${educationStyles['flex-ver']}`}>
                        <label htmlFor="school-name">School Name</label>
                        <input type="text" name="school" id="school-name" />
                    </div>
                    <div className={`${educationStyles['flex-ver']}`}>
                        <label htmlFor="title">Degree title</label>
                        <input type="text" name="title" id="title" />
                    </div>
                </div>
                <div className={educationStyles.row}>
                    <div>
                        <label htmlFor="year-complete">Year in which degree complteted</label>
                        <input type="date" name="year-complete" id="complteDate" className={educationStyles.completeDate} />
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