import { Navbar } from "../components/Navbar";
import "./about.css";
// import profileImg from "../assets/images/about-image.png";

export const About = () => {
  return (
    <div className="about">
      <Navbar />

      <div className="container">
        <div className="about-container">
          <div className="about-left">
            <p className="intro">Hi, I'm</p>
            <h2 className="name">Akhil Rawat</h2>

            <h1 className="title">
              <span>Creative</span> <br />{" "}
              <span className="ms-5">Designer</span>
            </h1>

            <p className="desc">with 3+ years of experience in graphic design, video editing, and motion design. I specialize in creating visually engaging content that not only looks great but also communicates effectively. My focus is on delivering high-quality work with attention to detail, creativity, and fast turnaround to help brands stand out.</p>
          </div>

          <div className="about-right">
            <div className="circle">
              <img src="https://res.cloudinary.com/dprcdacxw/image/upload/v1775294035/Akhil-rawat_ren4sn.png" alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
