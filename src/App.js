import logo from './logo.svg';
import './App.css';

function App() {
  const aPerson = {
    firstName: "Muu",
    lastName: "Kusunoki"
  }

  const aName = aPerson.firstName;
  const anElement = <center><h1>Hello, {aName + " " + aPerson.lastName}!</h1></center>;
 
  return (
    <div>{anElement}</div> //ต้องมี tag อะไรซักอย่างเวลา return เช่น <div></div>, <></> (อันหลังเรียกว่า fragment)
  );
}

export default App;
