
import { Outlet } from "react-router-dom";
import TopNav from "../Home/TopNav";
import Footer from "./Footer";
import Container from "react-bootstrap/esm/Container";

const Layout = () => {
    return ( 
        <>
        
        <Container>
            <TopNav/>
            <Outlet/>
            <br/>
            <Footer/>
            </Container>
           

        </>
     );
}
 
export default Layout;