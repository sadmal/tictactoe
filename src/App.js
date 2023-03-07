import Icon from "./components/Icons";
import { useState } from 'react';
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const tiktaktoearray= new Array(9).fill("");
const App = () =>{

    
    const [isCross,setIsCross]= useState(true);
    const [winMessage,setWinMessage]= useState("")

    //logic:-

    // 1) Play-again

    function playagain(){
      tiktaktoearray.fill("");
      setIsCross(true);
      setWinMessage("");
    }



    // 2) winner

    function findwinner(){
        
      let winnerPossibilities=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
      let isWinner= false;
      for(let  t of winnerPossibilities){
        let [a,b,c]=t;
        if(tiktaktoearray[a]==tiktaktoearray[b] && tiktaktoearray[a]==tiktaktoearray[c] && tiktaktoearray[a]!=""){
          setWinMessage(tiktaktoearray[a] + " has won")
          isWinner=true;
        }
      }
           if(tiktaktoearray.indexOf("")==-1 && isWinner==false){
            setWinMessage("Game Tied")
           }
    }


    // 3) user-turn

    function user_turn(index){

      if(winMessage!=""){
        return toast("Game over")
      }

      if(tiktaktoearray[index]!=""){
        return toast("Already filled")
      }

      tiktaktoearray[index]= isCross==true ? "cross":"circle";
      setIsCross(!isCross);
      findwinner();


    }


    return (

    <div>
      <ToastContainer/>

      {
        winMessage=="" ? (
        <h1> {isCross == true ? "cross turn" : "circle turn" } </h1> 
        ) :  (
          <div>
          <h1>{winMessage}</h1>
          <button onClick={playagain} className="btn">play again</button>
          </div>
        )
      }

       <div className="grid">
            {
              tiktaktoearray.map((value,index)=>(
                
                  <div onClick={()=>user_turn(index)}>
                    <Icon user_icon={value}/>
                  </div>
              ))
            }
       </div>

    </div>

  )
    
}

export default App