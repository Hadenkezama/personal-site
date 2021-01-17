import React from "react";

function MainContent() {
  return (
    <main className="main-grid-container">
      <div className="main-grid-about-me">
        <h1>About Me</h1>
        <p>
          I am an aspiring web developer. I graduated in December of 2020 with a
          Bachelor of Science majoring in Computer Science and minoring in
          Economics. Since then, I have spent a considerable amount of time on
          Frontend Masters.com teaching myself the most current tools practiced
          in the field of web development. I apply what I have learned into
          personal projects which can be seen on my GitHub (link below). I enjoy
          both front-end development and back-end development, and am eager to
          learn more about both. In the “Technologies” section, I have listed
          technologies I am currently proficient in. To inquire about anything,
          please use the “Contact Me” button to send me an email!
        </p>
      </div>

      <div className="main-grid-technologies">
        <h1>Technologies</h1>
        <h3>Programming Languages</h3>
        <p>C++, Javascript, HTML, CSS, SQL</p>
        <h3>Libraries</h3>
        <p>React</p>
        <h3>Server Side</h3>
        <p>NodeJS / Express, Nginx</p>
        <h3>DBMS</h3>
        <p>MySQL, MongoDB</p>
        <h3>Tools</h3>
        <p>VS code, Git, GitHub</p>
      </div>
      <div className="main-grid-interests-hobbies">
        <h1>Hobbies & Interestests</h1>
        <p>
          When I am not coding, I can usually be spotted at the gym, in the
          kitchen cooking, or watching NFL and NBA highlights. I have a love for
          powerlifting. Something about lifting things up, putting them down and
          then lifting them again really intrigues me. To fuel my gym addiction,
          I gotta eat. Am I a great cook? No. Am I a mediocre cook? Also, no.
          Luckily, I have an Instant Pot, which makes everything taste like
          Grandma made it. Finally, to tie this essay together with another
          smooth transition, once the food is made, I like to sit down with my
          roommate and girlfriend to watch some NBA and NFL highlights. Why
          highlights? Because we don’t have cable: strictly streaming services
          and YouTube. Regardless, I am an avid Toronto Raptors and Houston
          Texans fan with enough knowledge of both leagues to get by at any
          local bar.
        </p>
      </div>
    </main>
  );
}

export default MainContent;
