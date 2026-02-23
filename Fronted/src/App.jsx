import { useState } from 'react'
import './App.css'

function App() {
  const [loader, setLoader] = useState(false);
  // 1. You need a state to store the fetched data
  const [data, setData] = useState(null);

  // 2. Combined into one async function
  async function getServerData() {
    try {
      setLoader(true);
      const serverData = await fetch('http://localhost:4002/data');
      const jsondata = await serverData.json();
      
      // 3. Save the result to state
      setData(jsondata); 
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false);
    }
  }

  return (
    <>
      <h2>Fetching data using Node Server</h2>
      {/* 4. Show a loading message if loader is true */}
      <button onClick={getServerData} disabled={loader}>
        {loader ? "Loading..." : "Fetch Data"}
      </button>

      <div style={{ marginTop: '20px' }}>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>No data fetched yet.</p>
        )}
      </div>
    </>
  )
}

export default App