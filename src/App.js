import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="main">
          <div className="background-card">
            <h1 className="heading">Cv Generator</h1>
            <GeneralInfo />
            <Education />
          </div>
        </div>
      </div>
      {/* <h2>Hello</h2> */}
    </div>
  );
}

export default App;
