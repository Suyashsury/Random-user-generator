import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Data from "./data.json";
import { SectionDetails } from "./components/SectionDetails/SectionDetails";
function App() {
  const loadDetails = () => {
    console.log(Data.results);
  };
  return (
    <div className="user-generator-page">
      <div className="header-section">
        <h4>Krishna Bhamare</h4>
        <Button variant="dark" onClick={loadDetails}>
          Generate New User
        </Button>
      </div>
      <SectionDetails detail={Data.results[0]} />
    </div>
  );
}

export default App;
