
import './App.css'
import { Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage/HomePage'
import RadarPage from './pages/RadarPage/RadarPage'
// import Navigator from './components/Navigator/Navigator'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
         <Route path='radar' element={<RadarPage/>}/>
      </Routes>
      {/* <Navigator></Navigator> */}
    </>
  )
}

export default App
