import React ,{Component}from "react";

class Cv extends Component{
    // constructor({showGeneral}){
    //     super(props)
    // }
    render(){
        return(
            <div>        
                {/* <h2>{showGeneral}</h2> */}
                <h2>{this.props.lastName}</h2>
                <h3>This is h3</h3>
            </div>
        )
    }
}
export default Cv