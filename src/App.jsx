import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>

      
      <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element = {<Portfolio/>} />
          <Route path='/contact' element = {<Contact/>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
