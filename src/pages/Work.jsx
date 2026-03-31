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
                  <span>Look, choose,</span> <br />
                  <span>adjust, launch</span>
                </h1>
              </div>
              <div className="work-right">
                <p>
                  Take a look at the theme provided. Choose the suitable layout.
                  Customize it. Use the selected style and launch the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CategoryTabs />
    </>
  );
};
