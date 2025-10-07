
import './App.css'
//import BadCounter from './Components/badCounter'
import Counter from './Components/Counter'
import CounterWithLimit from './Components/CounterWithLimit'
import Toggle from './Components/toggle'
import EmojiStore from './Components/EmojiStore'
import ColorBox from './Components/ColorBox'
import data from "./data/data"

function App() {
  return (
    <>
    {/* <Counter/>
    <CounterWithLimit/>
    <Toggle/>
    <EmojiStore/> */}
    <ColorBox colors = {data}/>
    </>
  )
}

export default App
