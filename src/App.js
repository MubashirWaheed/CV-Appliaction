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
      generalFlag:false,
      educationFlag:false,
      personalFlag:false
    }
}
  handleChange = (event)=>{
    this.setState({
      [event.target.name]: event.target.value.trim()
    })
  }

  showGeneral =()=>{
    this.setState({
      generalFlag: true,
    })
  }
  showEducation =()=>{
    this.setState({
      educationFlag:true
    })
  }
  showPersonal =()=>{
    this.setState({
      personalFlag:true
    })
  }
  render() {
    // const {lastName} = this.props
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
                showGeneral= {this.showGeneral}
                phone={this.state.phone}/>
              <Education 
                handleChange={this.handleChange} 
                showEducation={this.showEducation}
                school={this.state.school}
                title={this.state.title}
                yearComplete={this.state.yearComplete}/>
              <Personal 
                handleChange={this.handleChange}
                showPersonal={this.showPersonal}
                company={this.state.company}
                position={this.state.position}
                tasks={this.state.tasks}/>
            </div>
          </div>
        {/* Conditional rendering here to show cv if all the forms are filled*/}
        {this.state.generalFlag === true && this.state.educationFlag === true && this.state.personalFlag === true? 
          <Cv firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            school={this.state.school}
            title={this.state.title}
            yearComplete={this.state.yearComplete}
            company={this.state.company}
            position={this.state.position}
            tasks={this.state.tasks}
            />
          : null}
        </div>
      </div>
    );
  }
}
export default App;
