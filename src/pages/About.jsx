import "../styles/about.css";

const About = () => {
  return (
    <main className="about">
      <figure className="hero-fig">
        <img
          src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </figure>
      <h1 className="about-title">About Blog Home & Garden Project</h1>
      <div className="about-para-wrapper">
        <p className="about-para">
          Thank you for viewing my project. The project was highly inspired by
          Better Homes and Gardens. I love their website, I think it is just so
          beautiful. Before deciding to create this project I knew that I wanted
          to create a real world project. I decided to try my hands at
          developing a blog type of website because I felt like it was a bit
          more complex than the last project I worked on. However, I am not by
          any means a designer. So, I did look for the inspiration.
        </p>
        <p className="about-para">
          For this project, I again used HTML, CSS, and React. The pages are
          routed using react-router-dom inside of App.js. I used the new React
          Router Dom version 6.4 routing. I created a variable of router using
          createBrowseRouter and passing an array of objects for each of the
          routes.
        </p>
        <p className="about-para">
          I created a file called data.js to hold dummy data for the posts. I
          used this data to filter through the categories depending on what page
          was displayed. I was able to filter using React Router Dom again, by
          using the useParams hook. I was able to do this by comparing the
          object&pos;s id with the categories of the posts or the post id, and
          the hero.id.
        </p>
        <p className="about-para">
          The newsletter modal created for this project simply uses state passed
          from parent to child component. Inside RootLayout.jsx I just created a
          state of showModal and setShowModal. I passed a prop of toggle using
          an anonymous function which just toggles the state (!showModal) to the
          Footer and the Navbar.
        </p>
        <p className="about-para">
          I hope you enjoyed viewing this project. I had so much fun working on
          it. I just can&apos;t wait to create more unique websites like this
          one. It&apos;s so exciting thinking about the world of posibilities
          for my next project. I hope that I can continue to learn more complex
          methods and better coding practices. I wish to aspire to an expert
          level someday and I hope that my beginner projects reflect my
          excitement for learning. Thank you again.
        </p>
      </div>
    </main>
  );
};

export default About;
