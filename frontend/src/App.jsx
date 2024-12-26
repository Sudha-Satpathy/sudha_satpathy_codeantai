
import './app.css'
import {BrowserRouter as Router, 
  Routes, Route
} from 'react-router-dom';
import Home from "./Pages/Home";
import FixStats from "./components/FixStats";
import Stats from './components/Stats';
import SignUp from './components/SignUp';
function App() {


  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/stats" element={<Stats/>} />
        <Route path="/fixstats" element={<FixStats/>} />

      </Routes>
    </Router>
  )
}

export default App
