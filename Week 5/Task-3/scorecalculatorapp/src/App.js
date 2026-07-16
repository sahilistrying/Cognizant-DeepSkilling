import logo from './logo.svg';
import './App.css';
import { CalculateScore } from "./Components/CalculateScore";
function App() {
  return (
     <div>
      <CalculateScore
        Name="Samhith"
        School="CVR COLLEGE OF ENGINEERING"
        total={284}
        goal={300}
      />
    </div>
  );
}
//exporting
export default App;
