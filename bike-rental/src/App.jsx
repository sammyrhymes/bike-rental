import Home from './Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NoPage from './NoPage'
import BikeDetails from './BikeDetails'

function App() {

  return (
    <Router>
    <div className=' bg-primary'>
      <div className='container p-4 mx-auto lg:max-w-[1000px]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NoPage />} />
          <Route path='/bike/:id' element={<BikeDetails />} />
        </Routes>
       
      </div>
    </div>
    </Router>
  )
}

export default App
