import React, { useEffect } from 'react'
import { Navbar, Footer } from './components'
import { AnimatePresence } from 'framer-motion'
import AppRoutes from "./components/Routes/Routes";
import { useStateValue } from './context/StateProvider';
import { getAllItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';

const App = () => {

  const [ {onlineItems }, dispatch] = useStateValue()
  const fetchData = async () =>{
    await getAllItems().then(data => {
      dispatch({
        type : actionType.SET_ONLINE_ITEM,
        onlineItems : data
      })
    })
  }
  useEffect(() => { fetchData() }, [])

  return (
      <AnimatePresence>
        <div className='bg-primary overflow-hidden text-black'>
            <Navbar />
              <AppRoutes />
            <Footer />
        </div>
      </AnimatePresence>
    )
}

export default App