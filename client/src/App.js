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
import Productlist from './components/Productlist'
import Cart from './components/Cart'
import PreviousBuy from './components/PreviousBuy'
import { createTheme, ThemeProvider } from '@mui/material'
import HomePage from './components/HomePage'
import Tender from './components/Tender'
import DashBoard from './components/DashBoard'
import AddProducts from './components/AddProducts'
import BuyerNav from './components/BuyerNav'
import SellerNav from './components/SellerNav'
import Aboutus from './components/Aboutus'
import GetProducts from './components/CollectTender'
import FinalTenders from './components/FinalTenders'
import Payment from './components/Payment'
import ChemicalPage from './components/ChemicalPage'

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
      h1: {
        fontSize: '3.125rem',
        fontWeight: 900,
        lineHeight: '140%',
        fontStyle: 'normal',
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: '140%',
        fontStyle: 'normal',
      },
      h3: {
        fontSize: '2.25rem',
        fontWeight: 700,
        lineHeight: '130%',
        fontStyle: 'normal',
      },
      h4: {
        fontSize: '1.5rem',
        lineHeight: '2.25rem',
        fontWeight: 600,
        fontStyle: 'normal',
      },
      h5: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: '130%',
        fontStyle: 'normal',
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: '130%',
        fontStyle: 'normal',
      },
      subtitle2: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: '140%',
        fontStyle: 'normal',
      },
    },
  })

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/productList" element={<Productlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={ <Aboutus/> }/>
          <Route path="/previousBuy" element={<PreviousBuy />} />
          <Route path="dashboard" element={<DashBoard />}>
            <Route path="buyer" element={<BuyerNav />}>
              <Route path="cart" element={<Cart />} />
              <Route path="allProducts" element={<ChemicalPage />} />
              <Route path="allTender" element={<Tender />} />
            </Route>
            <Route path="seller" element={<SellerNav />}>
              {/* Add products */}
              <Route path="addProduct" element={<AddProducts />} />
              {/* collect Tender */}
              <Route path="addTender" element={<GetProducts />} />
              <Route path="collectedTender" element={<FinalTenders />} />
            </Route>
          </Route>

          <Route path="payment" element={<Payment />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
