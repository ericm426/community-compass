import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Volunteer from "./pages/Volunteer"
import Resources from "./pages/Resources"
import Contact from "./pages/Contact"

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/resources')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/volunteer" element={<Volunteer/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    /* <div>
      <h1>Community Compass</h1>
      {data ? (
        <div>
          <p>Found {data.length} resources</p>
          {data.map(resource => (
            <div key={resource.id}>
              <h3>{resource.name}</h3>
              <p>{resource.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div> */
  )
}

export default App 