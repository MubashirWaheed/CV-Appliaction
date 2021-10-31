import React, {Component} from "react"
import generalInfo from "../styles/generalInfo.module.css"


class GeneralInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            telephone:""
        }
    }
    handleFirstName = (event)=>{
        this.setState({
            firstName:event.target.value
        })
    }
    handleLastName = (event)=>{
        this.setState({
            lastName: event.target.value
        })
    }
    handleEmail = (event)=>{
        this.setState({
            email: event.target.value
        })
    }
    handlePhone = (event)=>{
        this.setState({
            telephone:event.target.value
        })
    }
    submitted = (event)=>{
        event.preventDefault();
        console.log(this.state.value);
    }

    render(){
        return( 
            <form action="#"  typeof="submit" onSubmit={this.submitted}>
                <div className={generalInfo.row}>
                    <div className={`${generalInfo['flex-ver']}`}>
                        <label htmlFor="name">First Name <span className={generalInfo.red}>*</span></label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            value={this.state.firstName} 
                            placeholder="Enter first name" 
                            spellCheck="false" 
                            autoComplete="off" 
                            required="required"
                            onChange={this.handleFirstName} />
                    </div>
                    <div className={`${generalInfo['flex-ver']}`}>
                        <label htmlFor="last-name">Last Name <span className={generalInfo.red}>*</span></label>
                        <input 
                            type="text" 
                            name="last-name" 
                            id="last-name" 
                            value={this.state.lastName}
                            placeholder = "Enter last name" 
                            spellCheck = "false"
                            autoComplete = "off" 
                            required = "required"
                            onChange={this.handleLastName} />
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
                            value={this.state.email}
                            required="required"
                            onChange={this.handleEmail}  />
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
                            value={this.state.telephone}
                            onChange={this.handlePhone} />
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
            </form>    
        )            
    }

}

export default GeneralInfo