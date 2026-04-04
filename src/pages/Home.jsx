import { Navbar } from "../components/Navbar";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="https://res.cloudinary.com/dprcdacxw/video/upload/v1774968928/Hero-video_bhlnjb.mp4" type="video/mp4" />
      </video>

      <section className="hero">
        <div className="container">
          <h1>Akhil Rawat</h1>
          <p>A Creative Designer Helping brands stand out through eye-catching graphics and professional video editing. Focused on quality, creativity, and fast delivery.</p>
          <a href="/about" className="redirect-btn">Let's work together</a>
        </div>
      </section>
    </div>
  );
};
