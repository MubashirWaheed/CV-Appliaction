import './App.css';
import GeneralInfo from './components/GeneralInfo';
function App() {
  return (
    <div className="App">
      {/* <GeneralInfo title="mubashir"/> */}
      <div className="background">
        <form typeof="submit">
          <div className="background-card">
            <h1>Cv Generator</h1>
            <GeneralInfo />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
