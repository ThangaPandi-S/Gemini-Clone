import Main from "./Main/Main"
import SideBar from './sideBar/sideBar'
import {
  BrowserRouter,Route,Routes
} from "react-router-dom";
import Help from "./bottom/Help"
import Activity from "./bottom/Activity"
import Settings from "./bottom/Settings"
import Header from "./Header/Header";




const ReactRouter = () => {
  return (
    <BrowserRouter>
      <SideBar/>

      <div className="reactrouter">
      <Header/>

      <Routes>

        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Main/>}/>
        <Route path="/home/:user" element={<Main/>}/>
        <Route path='/help' element={<Help/>} />


        <Route path='/activity' element={<Activity/>}/>


        <Route path='/settings' element={<Settings/>}/>


      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default ReactRouter