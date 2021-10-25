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
            <div className="main">
                <div className="row">
                    <div className="flex name">
                        <label htmlFor="name">Name *</label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div className="flex email ">
                        <label htmlFor="name">Email *</label>
                        <input type="text" name="email" id="email-input" required/>
                    </div>
                </div>
            </div>
  
        )            
    }

}

export default GeneralInfo