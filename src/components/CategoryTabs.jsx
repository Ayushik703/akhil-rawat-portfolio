import { useState } from "react";
import "./categoryTabs.css";
import { projectsData } from "../data/projectData"; // adjust path if needed

export const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(null);

  // ✅ Convert your data to match existing UI structure
  const allProjects = projectsData.map((item) => ({
    id: item.id,
    type: item.type === "image" ? "photos" : "videos",
    src: item.url,
  }));

  const filteredData =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((item) => item.type === activeTab);

  const tabs = [
    { id: "all", label: "All" },
    { id: "photos", label: "Photos" },
    { id: "videos", label: "Videos" },
  ];

  return (
    <div className="tabs-wrapper pb-5">
      <div className="container">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <div className="grid">
            {filteredData.map((item, index) => (
              <div
                key={item.id}
                className="grid-item"
                onClick={() => setCurrentIndex(index)}
              >
                {item.type === "photos" ? (
                  <img src={item.src} alt="" />
                ) : (
                  <>
                    <video src={item.src} preload="metadata" />
                    <i className="fa-solid fa-play"></i>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {currentIndex !== null && (
        <div className="lightbox">
          <span className="close" onClick={() => setCurrentIndex(null)}>
            ✕
          </span>

          <button
            className="prev"
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0 ? filteredData.length - 1 : currentIndex - 1,
              )
            }
          >
            ‹
          </button>

          <div className="lightbox-content">
            {filteredData[currentIndex].type === "photos" ? (
              <img src={filteredData[currentIndex].src} alt="" />
            ) : (
              <video src={filteredData[currentIndex].src} controls autoPlay />
            )}
          </div>

          <button
            className="next"
            onClick={() =>
              setCurrentIndex(
                currentIndex === filteredData.length - 1 ? 0 : currentIndex + 1,
              )
            }
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};
