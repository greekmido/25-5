import './App.css';
import Break from './Break';
import Session from './Session';
import Timer from './Timer'
function App() {
  const 
  return (
    <div className="App">
      <header className="App-header">
      25+5 Clock
      <Break/>
      <Session/>
      <Timer/>
      <div id="start_stop">start/stop</div>
      <div id="reset">reset</div>
      </header>
    
    </div>
  );
}

export default App;
