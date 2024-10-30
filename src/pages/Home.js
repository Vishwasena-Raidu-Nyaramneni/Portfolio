import React from 'react';
import '../styles/Home.css'; // Updated path for Home.css
import ProfilePic from '../assets/Profile.jpg'; // Path to profile image

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-left">
          <p>
            Having 4+ years of professional experience in solving real-world technical problems by
            developing, supporting, and improving performance of web-based, distributed, cloud, and
            client/server applications using Java/J2EE (mainly Spring, AWS) technologies.
            Currently looking for an opportunity to contribute my services.
          </p>
        </div>
        <div className="home-right">
          <img src={ProfilePic} alt="Jack Sparrow" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}

export default Home;
