import './Sidebar.css'
import { useContext, useState } from 'react';
import {assets} from "../../assets/assets"
import { Context } from '../../context/context';
import { Link,useNavigate } from 'react-router-dom';



const SideBar = () => {
	const  [extended,setExtended] = useState(false);
	const {onSent,prevPrompts,setRecentPrompt,newChat}=useContext(Context);

	 const loadPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	}
	const navigate = useNavigate();
  return (
    <div className='sidebar white'>
		<div className="top">
		<img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />


            <div onClick={()=>{newChat(); navigate("/home") }} className='new-chat'>
              <img src={assets.plus_icon} alt="" />
			   {extended ?<p>New Chat</p>:null}
            </div>
			{extended ?<div className='recent'>
				<p className='recent-title'>Recent</p>
				{prevPrompts.map((item, index) =>{
					return (
						<div onClick={()=>{  navigate("/home");loadPrompt(item)}} className="recent-entry" key={index}>
					<img src={assets.message_icon} alt="" />
					<p >{item.slice(0,18)}</p>
				</div>
					)
})}



			</div>:null }

			</div>

        <section className='bottom'>
		<Link to="/help">
		<div className="bottom-item recent-entry">
			<img src={assets.question_icon} alt="" />
			{extended? <li>
			Help </li>
			:null}
		</div>
		</Link>

		<Link to="/activity">
		<div className="bottom-item recent-entry">
			<img src={assets.history_icon} alt="" />
			{extended? <li>
			Activity </li>:null}
		</div>
		</Link>

		<Link to="/settings">
		<div className="bottom-item recent-entry">
			<img src={assets.setting_icon} alt="" />
			{extended? <li>
			Settings </li> :null}
		</div>
		</Link>

        </section>


    </div>
  )
}

export default SideBar;