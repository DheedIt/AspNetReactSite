import './App.css'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import { Clock } from './assets/components/pages/Clock'
import { Main } from './assets/components/pages/main'

function App() {

  return (

    <>
      <BrowserRouter>
        {}
        <Routes>
          <Route path="/Clock" element={<Clock />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
