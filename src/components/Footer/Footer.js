import "./footer.css";
import SecHead from "../sectionheading/SecHead";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
     <div>
         <SecHead name='join Adventure to enjoy best we Have' />
    <footer>
      <div className='container'>
        <p>You can Unsubscribe at any time</p>
        <div className='inputs'>
          <div><input type='text' placeholder='Your Email' /></div>
          <div><input type='Submit' value='Subscribe' /></div>
        </div>
        <div className='details-container'>
          <div>
            <h2>About</h2>
            <ul>
              <li>How it works </li>
              <li>Career</li>
              <li>Services</li>
              <li>Testmonials</li>
            </ul>
          </div>
          <div>
            <h2>Contact Us</h2>
            <ul>
              <li>Contact </li>
              <li>Support</li>
              <li>Developer</li>
              <li>End</li>
            </ul>
          </div>
          <div>
            <h2>videos</h2>
            <ul>
              <li>influencer</li>
              <li>agency</li>
              <li>Submit vedio</li>
              <li>Front</li>
            </ul>
          </div>
          <div>
            <h2>Social Media</h2>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Youtube</li>
              <li>instgram</li>
            </ul>
          </div>
        </div>
      </div>
        <div className='footer_tail'>
          <h1>
            TRVL<i className='fa fa-plane'></i>
          </h1>
          <span>TRVL &copy;Mo</span>
          <ul>
            <Link to='https://web.facebook.com/'>
              <i style={{color:'#3b5998'}} className='fa fa-facebook'></i>
            </Link>
            <Link to='youtube.com'>
              <i style={{color:'#c4302b'}} className='fa fa-youtube'></i>
            </Link>
            <Link to='instagram.com'>
              <i style={{color:'#d62976'}} className='fa fa-instagram'></i>
            </Link>
            <Link to='twitter.com'>
              <i style={{color:'#00acee'}} className='fa fa-twitter'></i>
            </Link>
          </ul>
        </div>
    </footer>
     </div>
  );
};

export default Footer;
