import React, {Component} from "react"
import generalInfo from "../styles/generalInfo.module.css"

class GeneralInfo extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            disabled: false,
            submitBtnDisable: false
        }
    }
    submitted = (event)=>{
        event.preventDefault();
        if(this.state.submitBtnDisable) return
        this.setState({
            // Input disabler
            disabled: true,
            // Btn Disabler
            submitBtnDisable:true
        })
    }
    editForm = (event)=>{
        event.preventDefault();
        if(this.state.submitBtnDisable === false) return
        this.setState({
            disabled: false,
            submitBtnDisable: false
        })
    }
    render(){
        return( 
            <form action="#"  typeof="submit" onSubmit={this.submitted} >
                <div className={generalInfo.row}>
                    <div className={`${generalInfo['flex-ver']}`}>
                        <label htmlFor="name">First Name <span className={generalInfo.red}>*</span></label>
                        <input 
                            type="text" 
                            name="firstName" 
                            id="name"
                            // value="Mubashir"
                            value={this.props.firstName} 
                            placeholder="Enter first name" 
                            spellCheck="false" 
                            autoComplete="off" 
                            // required="required"
                            disabled = {(this.state.disabled)? "disabled" : ""}
                            onChange={this.props.handleChange} />
                    </div>
                    <div className={`${generalInfo['flex-ver']}`}>
                        <label htmlFor="last-name">Last Name <span className={generalInfo.red}>*</span></label>
                        <input 
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                            // value="Waheed"
                            value={this.props.lastName}
                            placeholder = "Enter last name" 
                            spellCheck = "false"
                            autoComplete = "off" 
                            // required = "required"
                            disabled = {(this.state.disabled)? "disabled" : ""}
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
                            // value="m@g.com"
                            value={this.props.email}
                            // required="required"
                            disabled = {(this.state.disabled)? "disabled" : ""}
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
                            // required = "required"
                            // value="12345"
                            value={this.props.phone}
                            disabled = {(this.state.disabled)? "disabled" : ""}
                            onChange={this.props.handleChange} />
                    </div>
                </div>   
                <div className={`${generalInfo['general-submit-btn']}`}>    
                    <button className={generalInfo.btn} 
                        type="submit" 
                        value="Submit"
                        onClick={this.props.showGeneral}>
                            Submit
                    </button>
                    <button className={generalInfo.btn} 
                        value="edit"
                        onClick={this.editForm}>
                            Edit
                    </button>
                </div>
            </form>    
        )            
    }
}

export default GeneralInfo
