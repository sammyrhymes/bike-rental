import Home from './Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NoPage from './NoPage'
import BikeDetails from './BikeDetails'
import NavBar from './components/NavBar'
import Bikes from './Bikes'
import About from './About'
import Footer from './Footer'

function App() {

  return (
    <Router>
    <div className=' bg-primary'>
      <NavBar />
      <div className='container  p-4 mx-auto lg:max-w-[1000px]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NoPage />} />
          <Route path='/bikes' element={<Bikes />} />
          <Route path='/bike/:id' element={<BikeDetails />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
       
      </div>
    </div>
    </Router>
  )
}

export default App
