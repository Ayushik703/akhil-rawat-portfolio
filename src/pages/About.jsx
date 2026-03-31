import { Navbar } from "../components/Navbar";
import "./about.css";
import profileImg from "../assets/images/about-image.png";

export const About = () => {
  return (
    <div className="about">
      <Navbar />

      <div className="container">
        <div className="about-container">
          <div className="about-left">
            <p className="intro">Hi, i'm</p>
            <h2 className="name">Akhil Rawat</h2>

            <h1 className="title">
              <span>Creative</span> <br />{" "}
              <span className="ms-5">Designer</span>.
            </h1>

            <p className="desc">
              Since creative designers often interact with creative teams,
              managers and clients, they need strong communication skills.
            </p>

            <div className="socials">
              <span>Instagram</span>
              <span>Pinterest</span>
              <span>500px</span>
            </div>
          </div>

          <div className="about-right">
            <div className="circle">
              <img src={profileImg} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
