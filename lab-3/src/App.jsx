import './App.css'
import ColorBoxesContainer from './Components/ColorBoxesContainer'
import data from "./data/data";

//Andrew Kim
//comp2013 Lab-3

function App() {
  return (
    <>
      <ColorBoxesContainer
        colors = {data} //pass array from data as colors prop
      />
    </>
  )
}

export default App
