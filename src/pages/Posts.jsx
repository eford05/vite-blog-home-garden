import { Fragment } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { posts, heroes } from "../data/data";
import "../styles/posts.css";

const Posts = () => {
  const cat = useParams();

  console.log(cat.id);

  return (
    <main className="home">
      {heroes
        .filter((hero) => cat.id === hero.id)
        .map((hero) => (
          <Fragment key={hero.id}>
            <figure className="hero-fig">
              <img src={hero.banner} alt={hero.alt} />
            </figure>
            <h2 className="posts-title">{hero.title}</h2>
          </Fragment>
        ))}

      <div className="posts-container">
        <section className="posts-section-cat">
          {posts
            .filter((post) => cat.id === post.cat)
            .map((post) => (
              <PostCard
                src={post.src}
                alt={post.alt}
                cat={post.cat}
                path={post.path}
                title={post.title}
                auth={post.auth}
                id={post.id}
                key={post.id}
              />
            ))}
        </section>
      </div>
    </main>
  );
};

export default Posts;
