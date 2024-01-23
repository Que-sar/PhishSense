import React from "react";
import "../components/news/News.css";
import newsimage from "../components/news/newsimage.webp";
import Footer from "../components/footer/Footer";

const News = () => {
  return (
    <div className="news-container">
      <div className="news-header-image-container">
        <div className="news-header-title">News</div>
      </div>
      <div className="news-list-container">
        <div className="news-list-title">Latest News and Updates</div>
        <div className="news-list">
          <div className="news-item">
            <div className="news-item-image">
              <img src={newsimage} alt="News Headline" />
            </div>
            <div className="news-item-content">
              <h3 className="news-item-title">
                Example News Title Continue its getting too long
              </h3>
              <p className="news-item-description">
                Something testing this has happened. Really testing.asdasdasd
                Something
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
