import './App.css'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import { Clock } from './assets/components/pages/Clock'


function App() {

  return (

    <>
      <BrowserRouter>
        {}
        <Routes>
          <Route path="/Clock" element={<Clock />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
