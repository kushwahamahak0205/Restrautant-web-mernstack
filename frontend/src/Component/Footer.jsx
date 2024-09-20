
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
    return ( 
        <>
            
            <footer>
    <div className="f1">
    <ul className="footer1">
      <h1>About</h1>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Press Release</li>
      <li>Blog</li>
    </ul>
    <ul className="footer2">
      <h1>Coffee Links</h1>
      <li>Coffee Reality</li>
      <li>Coffee Affiliate</li>
      <li>partner with us</li>
      <li>Coffee order</li>
    </ul>
    <ul className="footer3">
      <h1>Newsletter</h1>
      <li>subscribe now for regular update</li>
      <input type="name"placeholder="Enter Your Email"/><button className="button">submit</button>
      <li>Follow Us</li>
      <FaInstagram />
      <TiSocialFacebook />
      <TiSocialTwitter />
    </ul>

  </div>
  <div className="f2">
    <hr/>
    <h1>Download our App</h1>
    <ol className="footer4">
      <li>privacy policy</li>
      <li>Terms & Condition</li>
      <li>Refund & Replacement</li>
      <li>Warranty</li>
      <li>product care</li>
    </ol>
  </div>

  </footer>
  
        </>
     )
}

export default Footer;