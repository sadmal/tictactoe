import {FaRegCircle,FaTimes,FaPen} from "react-icons/fa";



const Icon=({user_icon})=>{
     
    switch(user_icon){
        case "circle":
            return <FaRegCircle className="icon"/>;
        case "cross":
            return <FaTimes className="icon"/>;
        default:
            return <FaPen className="icon"/>
    }
   
}

export default Icon