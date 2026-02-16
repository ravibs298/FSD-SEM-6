import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function getServerData(){
    //alert("hii....")
    const serverData = await fetch('http://localhost:4002/data')
    const jsondata = await serverData.json();
  }
  return (
    <>
      <h2>Fetching data using Node Server</h2>
      <button onClick={getServerData}>FetchData</button>
      {JSON.stringify(data)}
    </>
  )
}

export default App
