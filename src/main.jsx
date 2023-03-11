import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Styles/index.css'

import { BrowserRouter as Router} from "react-router-dom"
import { StateProvider } from "./context/StateProvider"
import { initialState } from "./context/initialState"
import reducer from "./context/reducer"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} >
      <Router>
          <App />
      </Router>
    </StateProvider>
  </React.StrictMode>
)
