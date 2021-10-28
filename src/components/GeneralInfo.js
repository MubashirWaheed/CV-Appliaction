import React, {Component} from "react"
import "../styles/generalInfo.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEdit} from "@fortawesome/free-solid-svg-icons"

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
                <div className="row">
                    <div className="flex-ver ">
                        <label htmlFor="name">First Name <span className="red">*</span></label>
                        <input type="text" name="name" id="name" placeholder="Enter first name" spellCheck="false" autoComplete="off" required />
                    </div>
                    <div className="flex-ver">
                        <label htmlFor="last-name">Last Name <span className="red">*</span></label>
                        <input type="text" name="last-name" id="last-name" placeholder="Enter last name" autoComplete="off" required/>
                    </div>
                    
                </div>
                <div className="row flex">
                    <div className="email flex-ver">
                        <label htmlFor="name">Email <span className="red">*</span></label>
                        <input type="email" name="email" id="email-input" placeholder="Enter email" spellCheck="false" autoComplete="off" required  />
                    </div>
                    <div className="flex-ver">
                        <label htmlFor="tel" className="phone">Phone <span className="red">*</span></label>
                        <input type="tel" name="phone" id="tel" placeholder="Enter phone" autoComplete="off"  required />
                    </div>
                    
                </div>   
                <div className="general-submit-btn">
                    <button className="btn"  type="submit">Submit</button>
                    <button className="btn">Edit</button>
                </div>
            </form>    
        )            
    }

}

export default GeneralInfo