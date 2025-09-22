import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <div className = "main-container">
        <Card 
        image = "src/assets/images/1.jpg"
        location = "Indonesia"
        name = "Gili Air Hotel"
        rating = {4.5}
        price = "$589/night"
        />
        <Card 
        image = "src/assets/images/2.jpg"
        location = "Seychelles"
        name = "Hilton Resort"
        rating = {4.2}
        price = "$629/night"
        />
        <Card 
        image = "src/assets/images/3.jpg"
        location = "US Virgin Islands"
        name = "Goa Resort"
        rating = {3.5}
        price = "$485/night"
        />
        <Card 
        image = "src/assets/images/4.jpg"
        location = "Bahamas"
        name = "Kuredu Resort"
        rating = {4.1}
        price = "$729/night"
        />
        <Card 
        image = "src/assets/images/5.jpg"
        location = "Mauritius"
        name = "Trou D'eau Douce"
        rating = {4.9}
        price = "$877/night"
        />
        <Card 
        image = "src/assets/images/6.jpg"
        location = "Bermuda"
        name = "Staniel Cay Hotel"
        rating = {3.2}
        price = "$365/night"
        />
      </div>
    </>
  )
}

export default App
