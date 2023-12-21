import Navbar from './components/Navbar'
import './App.css'
import HomePage from './Pages/HomePage'
import Loading from './components/Loading'
import { useEffect,useState } from 'react'


function App() {

  const [loadingState, setLoadingState] = useState(true)
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {

        setLoadingState(false)

      }, 4000)

    }

    fakeDataFetch()
  }, [])
  return (


    loadingState ? (<Loading />) :
      (
        <div className='w-[99vw] overflow-x-hidden'>
          <Navbar />
          <HomePage />
        </div>
      )
  )
}

export default App
