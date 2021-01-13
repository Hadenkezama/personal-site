import React from "react";

function MainContent() {
  return (
    <main className="main-grid-container">
      <div className="main-grid-about-me">
        <h1>About Me</h1>
        <p>
          I am a aspiring web developer passionate about creating stylish,
          functional and responsive web applications. I graduated from the
          University of Regina with a bachelors of science majoring in Computer
          Science and minoring in Economics. In my free time I enjoy learning
          new things about web development, going to the gym, and spending time
          with family and friends.
        </p>
      </div>

      <div className="main-grid-technologies">
        <h1>Technologies</h1>
        <h3>Programming languages</h3> C++, Javascript, HTML, CSS, SQL
        <h3>Libraries</h3>React
        <h3>Server Side</h3> NodeJS / Express, Nginx
        <h3>DBMS</h3> MySQL, MongoDB
        <h3>Tools</h3> VS code, Git, GitHub
      </div>
      <div className="main-grid-interests-hobbies">
        <h1>Hobbies & Interestests</h1>
        <p>
          I love to program. I spend a lot of my free time working on on my own
          personal projects and learning about front-end and back-end
          technologies. I am also interested in powerlifting, you can find me at
          the gym 5-6 days lifting heavy things, putting them down, and lifting
          them again. I am fan of the NFL (go Texans) and the NBA (go raptors).
          Finally, I love to cook (go Gordon Ramsey).
        </p>
      </div>
    </main>
  );
}

export default MainContent;
