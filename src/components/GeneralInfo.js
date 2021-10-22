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
            <div>
                <p>{this.props.title}</p>
                <input className="input-text" onChange={this.handleChange} type="text"/>
                <FontAwesomeIcon icon={faEdit}/>
            </div>
        )            
    }

}
export default GeneralInfo