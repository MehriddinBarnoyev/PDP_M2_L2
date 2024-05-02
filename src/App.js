import "bootstrap/dist/css/bootstrap.min.css";
// import { Dropdown } from "react-bootstrap";
import Header from "./Components/Header";
import Section1 from "../src/Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Section6 from "./Components/Buttons/Section6";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App ">
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Footer></Footer>

      
    </div>
  );
}

export default App;
