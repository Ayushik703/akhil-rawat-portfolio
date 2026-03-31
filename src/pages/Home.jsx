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
          <p>
            Creative and results-oriented UI/UX designer with three years of
            hands-on experience translating complex concepts into user-friendly
            designs. Proficient in wireframing.
          </p>
          <a href="/about" className="redirect-btn">Learn More</a>
        </div>
      </section>
    </div>
  );
};
