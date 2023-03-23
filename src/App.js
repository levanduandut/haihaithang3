import "./App.css";
import Slidebar from "./components/SlideBar/Slidebar";
import { BrowserRouter as Router ,Routes as Switch,Route } from "react-router-dom";
import Generality from "./pages/Generality";
import TableSalary from "./pages/TableSalary";
function App() {
  return (
    <Router>
      <Slidebar/>
      <Switch>
        <Route path="/generality" exact Component={Generality}/>
        <Route path="/salary-table" exact Component={TableSalary}/>
      </Switch>
    </Router>
  );
}

export default App;
