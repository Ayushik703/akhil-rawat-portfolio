import { Navbar } from "../components/Navbar";
import { CategoryTabs } from "../components/CategoryTabs";
import "./work.css";

export const Work = () => {
  return (
    <>
      <div className="work">
        <div className="work-in">
          <Navbar />

          <div className="container">
            <div className="work-container">
              <div className="work-left">
                <h1>
                  <span>Visuals that stop</span> <br />
                  <span>the scroll.</span>
                </h1>
              </div>
              <div className="work-right">
                <p>Delivering high-quality work with a strong focus on detail and creativity—ensuring every project meets client expectations and satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CategoryTabs />
    </>
  );
};
