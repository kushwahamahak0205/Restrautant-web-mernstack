
import { useNavigate } from "react-router-dom";
const Card = () => {
    const navigate=useNavigate();
    
    const handle=()=>{
        
        navigate("/pizza")
      }
      const handle2=()=>{
        
        navigate("/north")
      }
      const handle3=()=>{
        
        navigate("/noodles")
      }
      const handle4=()=>{
        
        navigate("/paratha")
      }
      const handle5=()=>{
        
        navigate("/biryani")
      }
       
    
    return ( 
        <>
            <div>
                <img src="src/image/piza.avif" onClick={handle}/>
                <img src="src/image/north_indian.avif" onClick={handle2}/>
                <img src="src/image/noodles.avif" onClick={handle3}/>
                <img src="src/image/paratha.avif" onClick={handle4}/>
                <img src="src/image/biryani.avif" onClick={handle5}/>
               
                <hr color="lightblack"></hr>
            </div>
        </>
     );
}
 
export default Card;