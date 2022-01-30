import React,{useState} from "react"
import {useNavigate} from "react-router-dom"
import "./feedbac.css"


const Feedback = () => {
   
    const[title , setTitle] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(title)   
        navigate("/");
    }

   
   

    return (
        <div className="create">
           <h2 className="header">Feedback</h2>
           <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              minLength= "6"
             />
              <button className="button">submit</button>  
           </form>
        </div>
    );
}
 
export default Feedback;