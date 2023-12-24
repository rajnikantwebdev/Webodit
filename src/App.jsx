import StickyNavbar from './components/Navbar'
import HomePage from './Pages/HomePage'
// import Loading from './components/Loading'
import { useEffect,useState } from 'react'


function App() {

  const [loadingState, setLoadingState] = useState(true)
  // useEffect(() => {
  //   const fakeDataFetch = () => {
  //     setTimeout(() => {

  //       setLoadingState(false)

  //     }, 4000)

  //   }

  //   fakeDataFetch()
  // }, [])
  return (
        <div>
          <StickyNavbar/>
          <HomePage />
        </div>
  )
}

export default App
