import React, {Component} from "react"
import generalInfo from "../styles/generalInfo.module.css"
// import Cv from "./Cv"


class GeneralInfo extends Component{
    
    submitted = (event)=>{
        event.preventDefault();
        // make Inputs unslectable after submit
        console.log(this.props.firstName);
    }

    render(){
        return( 
            <form action="#"  typeof="submit" onSubmit={this.submitted}>
                <div className={generalInfo.row}>
                    <div className={`${generalInfo['flex-ver']}`}>
                        <label htmlFor="name">First Name <span className={generalInfo.red}>*</span></label>
                        <input 
                            type="text" 
                            name="firstName" 
                            id="name"
                            value={this.props.firstName} 
                            placeholder="Enter first name" 
                            spellCheck="false" 
                            autoComplete="off" 
                            required="required"
                            disabled
                            onChange={this.props.handleChange} />
                    </div>
                    <div className={`${generalInfo['flex-ver']}`}>
                        <label htmlFor="last-name">Last Name <span className={generalInfo.red}>*</span></label>
                        <input 
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                            value={this.props.lastName}
                            placeholder = "Enter last name" 
                            spellCheck = "false"
                            autoComplete = "off" 
                            required = "required"
                            onChange={this.props.handleChange} />
                    </div>
                </div>
                <div className={`${generalInfo.row} ${generalInfo.flex}`}>
                    <div className={`${generalInfo['flex-ver']}`} >
                        <label htmlFor="name">Email <span className={generalInfo.red}>*</span></label>
                        <input
                            type="email"
                            name="email"
                            id="email-input" 
                            placeholder="Enter email" 
                            spellCheck="false" 
                            autoComplete="off" 
                            value={this.props.email}
                            required="required"
                            onChange={this.props.handleChange}  />
                    </div>
                    <div className={`${generalInfo['flex-ver']}`}>
                        <label htmlFor="tel" className="phone">Phone <span className={generalInfo.red}>*</span></label>
                        <input 
                            type="tel" 
                            name="phone" 
                            id="tel" 
                            placeholder="Enter phone" 
                            autoComplete="off"
                            required = "required"
                            value={this.props.phone}
                            onChange={this.props.handleChange} />
                    </div>
                    
                </div>   
                <div className={`${generalInfo['general-submit-btn']}`}>    
                    <button className={generalInfo.btn} 
                        type="submit" 
                        value="Submit">
                            Submit
                    </button>
                    <button className={generalInfo.btn} value="edit">Edit</button>
                </div>
                {/* <Cv title={"title"}/> */}
            </form>    
        )            
    }

}

export default GeneralInfo