import './App.css';
import ListingContainer from "./Components/ListingsContainer";
import data from "./data/data";
import Clicker from "./Components/Clicker";
import EmptyForm from './Components/EmptyForm';
import ClickerWithProps from './Components/ClickerWithProps';

function App() {
  return (
    <>
    <h2>Resorts Lite</h2>
    <ListingContainer items = {data}/>
    <br />
    <Clicker/>
    <EmptyForm/>
    <ClickerWithProps message = {"This is a clicker msg as a prop"} btnText={"Click me for msg!"}/>
    </>
  );
}

export default App;
