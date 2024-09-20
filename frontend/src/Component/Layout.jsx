

import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {

    const [input, setInput] = useState({});
    const [email, setEmail]= useState("");
    const [password, setPassword]=useState("");
    const navigate= useNavigate();
   
   
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
    
   
     const [messageApi, contextHolder] = message.useMessage();
     const key = 'updatable';
   
   
      const handleInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setInput(values=>({...values, [name]:value}))
      }
   
   
      const handleSubmit=()=>{
       let api="http://localhost:8080/customer/customersave";
   
       axios.post(api, input).then((res)=>{
         console.log(res);
   
         setShow(false);
         
         messageApi.open({
           key,
           type: 'loading',
           content: 'You are Succesfully Registered...',
         });
         setTimeout(() => {
           messageApi.open({
             key,
             type: 'success',
             content: 'You are Succesfully Registered...',
             duration: 2,
           });
         }, 1000);
       })
      }
   
      const checkUser=(e)=>{
        e.preventDefault();
        let api="http://localhost:8000/customer/customercheck";
        axios.post(api, {email:email, password:password}).then((res)=>{
         console.log(res.data.name);
         window.localStorage.setItem("userName", res.data.name);
         window.localStorage.setItem("userEmail", res.data.email);
         window.localStorage.setItem("userid", res.data._id);
         navigate("/dashboard");
        }).catch((err)=>{
   
          message.error(err.response.data);
   
        })
      }
   



    return ( 
        <>
        <input type="checkbox" name="" id="demo"/>
        <div id="nav">
        <img src="/src/image/logoo.svg"/>
        <div id="link">
            <Link to="/home" style={{paddingLeft:"25px",textDecoration:"none"}}>
            Home
            </Link>
            <Link to="/about" style={{paddingLeft:"25px",textDecoration:"none"}}>
            About
            </Link>
            <Link to="/menu"  style={{paddingLeft:"25px",textDecoration:"none"}}>
            Our Menu
            </Link>
            <Link to="/order" style={{paddingLeft:"25px",textDecoration:"none"}}>
            Order
            </Link>
            <Link to="/blog" style={{paddingLeft:"25px",textDecoration:"none"}}>
            Blog
            </Link>

           
            </div>

            <div id="icon">
             <Link>
             <IoSearch />
             </Link>

            <Link>
            <FaShoppingCart />
            </Link>
            </div>

            <label for="demo">
            <FaBars />
             </label>

              </div>


            <Outlet/>
            <br/>
            <Footer/>
            
           

        </>
     );
}
 
export default Layout;