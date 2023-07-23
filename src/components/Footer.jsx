import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/footer.css";

//Toggle is passed to toggle the newsmodal open and closed
const Footer = ({ toggle }) => {
  Footer.propTypes = {
    toggle: PropTypes.bool,
  };
  return (
    <footer>
      <section className="footer-primary">
        <h3 className="logo">Blog Home & Garden</h3>
        <button className="news-btn" onClick={toggle}>
          Newsletter
        </button>
        <div className="footer-social-wrapper">
          <p className="footer-social">Follow Us</p>
          <ul className="footer-social-list">
            <li>
              <FaFacebookF className="footer-icon" />
            </li>
            <li>
              <FaInstagram className="footer-icon" />
            </li>
            <li>
              <FaTwitter className="footer-icon" />
            </li>
            <li>
              <FaPinterest className="footer-icon" />
            </li>
            <li>
              <FaTiktok className="footer-icon" />
            </li>
          </ul>
        </div>
      </section>
      <section className="footer-secondary">
        <ul className="footer-list">
          <li>
            <Link to="/posts/decor">Decortating</Link>
          </li>
          <li>
            <Link to="/posts/repair">Home Improvement</Link>
          </li>
          <li>
            <Link to="/posts/garden">Garden</Link>
          </li>
          <li>
            <Link to="/posts/housekeeping">Housekeeping</Link>
          </li>
          <li>
            <Link to="/posts/recipes">Recipes</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
