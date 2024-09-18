import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import Blog from "./Component/Blog";
import Pizza from "./Component/Pizza";

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

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default App;