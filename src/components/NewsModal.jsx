import { HiOutlineXMark } from "react-icons/hi2";
import PropTypes from "prop-types";
import "../styles/newsmodal.css";

const NewsModal = ({ show, toggle }) => {
  NewsModal.propTypes = {
    show: PropTypes.bool,
    toggle: PropTypes.func,
  };

  console.log(show);

  //disable scrolling when modal is active
  show
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div className="news-modal-backdrop">
      <div className="news-modal">
        <div className="modal-logo-wrapper">
          <h3 className="newsletter-logo">Blog Home & Garden</h3>
          <HiOutlineXMark className="close-modal" onClick={toggle} />
        </div>

        <p className="newsletter-promo">
          Stay inspired with up to date news for all your home and garden
          passions.
        </p>
        <form action="" id="newsletter" className="newsletter-form">
          <div className="email-wrapper">
            <label htmlFor="news-email">Email address</label>
            <input
              type="text"
              id="news-email"
              placeholder="yourname@example.com"
            />
          </div>

          <div className="newsletter-content">
            <h3 className="subscription-title">Newsletter Subscription</h3>
            <div className="sub-cat">
              <input type="checkbox" id="decor" />
              <label htmlFor="decor">Decorating</label>
            </div>
            <div className="sub-cat">
              <input type="checkbox" id="repair" />
              <label htmlFor="repair">Home Improvement</label>
            </div>
            <div className="sub-cat">
              <input type="checkbox" id="garden" />
              <label htmlFor="garden">Garden</label>
            </div>
            <div className="sub-cat">
              <input type="checkbox" id="housekeeping" />
              <label htmlFor="housekeeping">Housekeeping</label>
            </div>
            <div className="sub-cat">
              <input type="checkbox" id="recipes" />
              <label htmlFor="recipes">Recipes</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsModal;
