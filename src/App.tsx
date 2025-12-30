import "./App.css";
import Calender from "./components/Calender";

function App() {
  return (
    <div className="app">
      {/*  Assuming here that format will be mm/dd/yyyy */}
      <Calender date="03/23/2022" />
    </div>
  );
}

export default App;
