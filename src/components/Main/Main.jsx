import './Main.css'
import  {assets} from "../../assets/assets"
import { useContext } from 'react'
import {Context} from "../../../src/context/context"
import { useParams } from 'react-router-dom'



const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    cardPrompt,
    input}= useContext(Context);


    const CardValue =
      {
        card1:"Suggest beautiful places to see on an upcoming road trip",
        card2:"Briefly summarize this concept : urban plannig",
        card3:"Brainstrom team bonding activities for our work retreat",
          card4:"Improve the readability of the following code",
      }





  return (
    <main className="main">
      {/* nav tag changed */}

      <section className='main-container'>

      {!showResult ?
      <>
        <div className="greet">
          <p><span>Hello,  Dev..</span></p>
          <p>How Can I help you today ?</p>
        </div>

        <div className="cards">
          <div className="card" onClick={()=>cardPrompt(CardValue.card1)}>
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card" onClick={()=>cardPrompt(CardValue.card2)}>
            <p>Briefly summarize this concept : urban plannig</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card" onClick={()=>cardPrompt(CardValue.card3)}>
            <p>Brainstrom team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card" onClick={()=>cardPrompt(CardValue.card4)}>
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
      </> :<div className='result'>

            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>

            <div className='result-data'>
            <img src={assets.gemini_icon} alt="" />
            {loading ?
             <div className="loader">
              <hr />
              <hr />
              <hr />
             </div>
             :
             <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }

            </div>

        </div>}


        <div className="main-bottom">

          <div className="search-box">
            <input type="text" placeholder='Enter a prompt here..' onChange={(e)=>setInput(e.target.value)} value={input} autoFocus/>

            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img src={assets.send_icon} alt="" onClick={()=>onSent()} /> : null}

            </div>

          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </section>

    </main>
  )
}

export default Main