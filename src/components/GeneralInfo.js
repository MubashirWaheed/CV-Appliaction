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


// <div className="background">
                // <form type="submit">
                    // <div className="background-card">
                        // <h1>Cv Generator</h1>
                        {/* <div> */}
                            {/* <label>First Name *</label><input type="text" required/>     */}
                            {/* <label>Last Name *</label><input type="text" name="" id="" required/>                      */}
                            {/* <label htmlFor="email">Email *</label><input className="input-text" onChange={this.handleChange} type="email" id="email"/> */}
                            {/* <label htmlFor="">Phone *</label><input type="number" /> */}
                        {/* </div> */}
                        {/* <p>{this.props.title}</p> */}
                        
            //             <FontAwesomeIcon icon={faEdit}/>
            //             <button type="submit">Submit</button>
            //         </div>
            //     </form>
            // </div>
export default GeneralInfo