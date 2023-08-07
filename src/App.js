import './App.css';
import {Button} from "./stories/Button";
function App() {
  return (
    <div className="App">
      <Button 
        primary
        backgroundColor="#782a2a"
        size="large"
        label="Test label"
        onClick={()=>alert(11)}
      />
    </div>
  );
}

export default App;
