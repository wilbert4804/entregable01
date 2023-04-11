
import { useState } from 'react'
import './App.css'
import db from "./db/db.json"
import ContainerInfo from './components/ContainerInfo'

const images = ["bg1", "bg2", "bg3", "bg4"]
function App() {
  const getRandomItem = (listItems) =>{
    const randonIndex = Math.floor(Math.random() * listItems.length)
    return listItems[randonIndex]
  }
  const [quote, setquote] = useState(getRandomItem(db))
  const [bgImage, setBgImage] = useState(getRandomItem(images))
  const handLeNewquote = () => {
    setquote(getRandomItem(db)) 
    setBgImage(getRandomItem(images))
  }
  return (
    <div className={`App ${bgImage}`}>
     <ContainerInfo quote={quote} handLeNewquote={handLeNewquote}/>
    </div>
  )
}

export default App
