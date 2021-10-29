import React, {Component} from "react"
import generalInfo from "../styles/generalInfo.module.css"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {faEdit} from "@fortawesome/free-solid-svg-icons"

class GeneralInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            Text: ""
        }
    }
    handleChange =(e)=>{
        console.log("handling change");
    }

    render(){
        return( 
            <form action="#"  typeof="submit">
                <div className={generalInfo.row}>
                    <div className={`${generalInfo['flex-ver']}`}>
                        <label htmlFor="name">First Name <span className={generalInfo.red}>*</span></label>
                        <input type="text" name="name" id="name" placeholder="Enter first name" spellCheck="false" autoComplete="off" required />
                    </div>
                    <div className={`${generalInfo['flex-ver']}`}>
                        <label htmlFor="last-name">Last Name <span className={generalInfo.red}>*</span></label>
                        <input type="text" name="last-name" id="last-name" placeholder="Enter last name" autoComplete="off" required/>
                    </div>
                </div>
                <div className={`${generalInfo.row} ${generalInfo.flex}`}>
                    <div className={`${generalInfo['flex-ver']}`} >
                        <label htmlFor="name">Email <span className={generalInfo.red}>*</span></label>
                        <input type="email" name="email" id="email-input" placeholder="Enter email" spellCheck="false" autoComplete="off" required  />
                    </div>
                    <div className={`${generalInfo['flex-ver']}`}>
                        <label htmlFor="tel" className="phone">Phone <span className={generalInfo.red}>*</span></label>
                        <input type="tel" name="phone" id="tel" placeholder="Enter phone" autoComplete="off"  required />
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

export default GeneralInfo