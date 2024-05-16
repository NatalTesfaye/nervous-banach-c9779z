import "./FooterStyles.css";
import { FaFacebook, FaTwitter, FaBehance, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="footer">
      <div class="top">
        <div>
          <h1>PHOA-E</h1>
          <p>Public Health Officers Association of Etiopia.</p>
        </div>

        <ul className="icons">
          <a href="facebook.com/PHAOEt">
            <li>
              <FaFacebook />
            </li>
          </a>
          <a href="/">
            <li>
              <FaInstagram />
            </li>
          </a>
          <a href="/">
            <li>
              <FaBehance />
            </li>
          </a>
          <a href="/">
            <li>
              <FaTwitter />
            </li>
          </a>
        </ul>
      </div>

      <div className="bottom">
        <div>
          <h4>Projects</h4>

          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>

          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contuct Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Term of Services</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
