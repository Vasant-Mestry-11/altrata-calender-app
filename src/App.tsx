import "./App.css";
import Calender from "./components/Calender";

function App() {
  return (
    <div className="app">
      {/*  Assuming here that format will be mm/dd/yyyy */}
      <Calender date="12/30/2025" />
    </div>
  );
}

export default App;
