import React, {Component} from "react";
import "../styles/education.module.css"
class Education extends Component{
    constructor(props){
        super(props)
        this.state = ""
    }

    render(){
        // require("../styles/education.module.css");
        return(
            <form action="#">
                <div>
                    <div className="row">
                    {/* <div className={styles.row}> */}
                        <label htmlFor="school-name">School Name</label>
                        <input type="text" name="school" id="school-name" />
                        <label htmlFor="">Degree title</label>
                        <input type="text" />

                    </div>
                </div>
                <div>
                    <h1>Hello World</h1>
                </div>
            </form>
        )
    }
}
export default Education