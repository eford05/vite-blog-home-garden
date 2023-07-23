import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/postcard.css";

const PostCard = ({ classStyle, src, alt, cat, path, title, auth }) => {
  PostCard.propTypes = {
    classStyle: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    cat: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
    auth: PropTypes.string,
  };

  return (
    <div className={classStyle === "home" ? "home-post-card" : "cat-post-card"}>
      <figure className="post-fig">
        <img src={src} alt={alt} />
      </figure>
      <div className="post-info">
        <p className="post-cat">{cat}</p>
        <Link to={path}>
          <h3 className="post-title">{title}</h3>
        </Link>
        <p className="post-auth">{auth}</p>
      </div>
    </div>
  );
};

export default PostCard;
