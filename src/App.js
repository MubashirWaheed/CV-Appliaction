import React,{Component} from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Personal from './components/Personal';
import Cv from "../src/components/Cv"

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      school: "",
      title: "",
      yearComplete: "",
      company: "",
      position: "",
      tasks: "",
      random:false
    }
}
  handleChange = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  showGeneral =()=>{
    this.setState={
      random: true,
    }
  }

  render() {
    return (
      <div className="App">
        <div className="background">
          <div className="main">
            <div className="background-card">
              <h1 className="heading">Cv Generator</h1>
              <GeneralInfo 
                handleChange={this.handleChange} 
                firstName={this.state.firstName} 
                lastName={this.state.lastName}
                email={this.state.email}
                // showGeneral={this.state.showGeneral}
                showGeneral= {this.showGeneral}
                phone={this.state.phone}/>
              <Education 
                handleChange={this.handleChange} 
                school={this.state.school}
                title={this.state.title}
                yearComplete={this.state.yearComplete}/>
              <Personal 
                handleChange={this.handleChange}
                company={this.state.company}
                position={this.state.position}
                tasks={this.state.tasks}/>
            </div>
          </div>
        {/* Conditional rendering here to show cv if all the forms are filled*/}
        {/* This is rendered Imediatelly  */}
        
        {this.state.random? <Cv lastName={this.state.lastName}/>: "False"}
        {/* <h2>Helo</h2> */}
        </div>
      </div>
    );
  }
}
export default App;
