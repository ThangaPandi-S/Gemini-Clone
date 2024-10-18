import './App.css'
import ReactRouter from './components/ReactRouter.jsx'

import ContextProvider from './context/context.jsx'



function App() {

  return (
    <ContextProvider>
    <ReactRouter/>
    </ContextProvider>
  )
}

export default App
