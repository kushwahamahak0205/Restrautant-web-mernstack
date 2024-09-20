
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
      const handle6=()=>{
        
        navigate("/berger")
      }
       
    
    return ( 
        <>
            <div>
                <img src="src/image/piza.avif" style={{width:"200px"}} onClick={handle}/>
                <img src="src/image/north_indian.avif" style={{width:"200px"}} onClick={handle2}/>
                <img src="src/image/noodles.avif" style={{width:"200px"}} onClick={handle3}/>
                <img src="src/image/paratha.avif" style={{width:"200px"}} onClick={handle4}/>
                <img src="src/image/biryani.avif" style={{width:"200px"}} onClick={handle5}/>
                <img src="src/image/bergerrrrr.avif" style={{width:"200px"}} onClick={handle6}/>

                <hr color="lightblack"></hr>
            </div>
        </>
     );
}
 
export default Card;