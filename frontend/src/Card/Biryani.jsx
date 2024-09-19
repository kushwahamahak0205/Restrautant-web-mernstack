import axios from "axios";
import { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useDispatch } from "react-redux";
import { addcartData } from "../addtocartSlice";

const Biryani = () => {

   const [mydata,setmydata]=useState([]);
   const dispatch=useDispatch()

   const loaddata=()=>{
       let api="http://localhost:3000/product";
      axios.get(api).then((res)=>{
       setmydata(res.data);
   })
}
useEffect(()=>{
   loaddata();
},[])

const addTocartData=(id,name,cate,brand,price,desc,image)=>{
 dispatch(addcartData({id:id,name:name,category:cate,brand:brand,
                        price:price,description:desc,image:image,qnty:1}))

}
const ans=mydata.map((key)=>{
   return(
       <>
       <div id="c">
       <Card style={{ width: "250px",marginTop:"20px" }}>
     <Card.Img variant="top" src={key.image} />
     <Card.Body>
       <Card.Title style={{textAlign:"center", color:"rgb(163, 6, 13)"}}>{key.name}</Card.Title>
       <h3 style={{color:"navy",fontSize:"15px"}}>Brand:{key.brand}</h3>
    
       <h3 style={{color:"navy",fontSize:"15px"}}>For:{key.category}</h3>
       <Card.Text>
         {key.description}
       </Card.Text>
       <h4 style={{color:"red", fontSize:"16px"}}> Price : {key.price} </h4> 
       <Button variant="primary" onClick={()=>{
         addTocartData(key.id,key.name,key.category,key.brand,key.price,key.description,key.image)
       }}>Add to cart</Button>
     </Card.Body>
   </Card>
   
</div>
       </>
   )
})

    return ( 
        <>
            <h1>biryani</h1>
                 
           <div id="card1">
        <h1>Our Premium Products</h1>
    </div>
            <div id="homeproduct">
        {ans}
        </div>
      
        </>
     );
}
 
export default Biryani;