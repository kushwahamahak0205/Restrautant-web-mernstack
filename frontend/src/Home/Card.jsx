import { useState } from "react";


const Card = () => {
    const [myimg,setmyimg]=useState({})
   
    const handle=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
          setmyimg(values=>({...values,[name]:value}))
       
    }
    return ( 
        <>
            <div>
                <img src="src/image/piza.avif" name="pizza" value={myimg.pizza} onClick={handle}/>
                <img src="src/image/north_indian.avif" onClick={handle}/>
                <img src="src/image/noodles.avif" onClick={handle}/>
                <img src="src/image/paratha.avif" onClick={handle}/>
                <img src="src/image/biryani.avif" onClick={handle}/>
               
                <hr color="lightblack"></hr>
            </div>
        </>
     );
}
 
export default Card;