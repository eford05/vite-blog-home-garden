import { useParams } from "react-router-dom";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import Recommended from "../components/Recommended";
import { Link } from "react-router-dom";
import { posts } from "../data/data";
import "../styles/post.css";

const Post = () => {
  //Filter single posts by comparing the id of the path, the posts ids are numeric so currentPost object id must be parsed as an integer
  const currentPost = parseInt(useParams().id);

  return (
    <main className="post-body">
      {posts
        .filter((post) => currentPost === post.id)
        .map((post) => (
          <article className="post-container" key={post.id}>
            <h1 className="blog-post-title">{post.title}</h1>
            <p className="blog-post-desc">{post.desc}</p>

            <figure className="blog-post-fig">
              <img src={post.src} alt={post.alt} />
            </figure>
            <figcaption className="photo-auth">Unsplash</figcaption>

            <div className="author-wrapper">
              <p className="blog-post-auth">{post.auth}</p>
              <Link to={"/write"}>
                <HiOutlinePencil className="post-icon" />
              </Link>
              <Link to={"/write"}>
                <HiOutlineTrash className="post-icon" />
              </Link>
            </div>

            <p className="post">{post.post}</p>
          </article>
        ))}
      <Recommended />
    </main>
  );
};

export default Post;
