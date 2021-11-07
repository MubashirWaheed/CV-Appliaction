import React ,{Component}from "react";
// import cv from "../styles/cv.module.css"
import "../App.css"

class Cv extends Component{ 
    render(){
        const {
            firstName,
            lastName,
            email,
            phone,
            school,
            titile,
            yearComplete,
            company,
            position,
            tasks
        } = this.props
        return(
            // className="background-card  test"
            // className="cv"
            <div>        
                <div >
                {/* <div className={`${check['background-card']}`} > */}
                    <h2>{firstName} {lastName}</h2>
                    {/* <h2>{school}</h2> */}
                    {/* <h2>{company}</h2> */}
                </div>
            </div>
        )
    }
}
export default Cv