import Navbar from './components/Navbar'
import Login from './components/Login'
import Heropage from './components/Heropage'

import './App.css'
import Registration from './components/Registration'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import AddChemicals from './components/AddChemicals'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Heropage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/addChemical" element={<AddChemicals />} />
      </Routes>
    </div>
  )
}

export default App
