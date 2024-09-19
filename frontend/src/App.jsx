import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import Blog from "./Component/Blog";


import Pizza from "./Card/Pizza";
import Noodles from "./Card/Noodles";
import Paratha from "./Card/Paratha";
import Biryani from "./Card/Biryani";
import NorthIndian from "./Card/NorthIndian";

const App = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/pizza" element={<Pizza/>}/>
                    <Route path="/noodles" element={<Noodles/>}/>
                    <Route path="/paratha" element={<Paratha/>}/>
                    <Route path="/biryani" element={<Biryani/>}/>
                    <Route path="/north" element={<NorthIndian/>}/>

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default App;