import React, { useEffect /* useState */ } from "react";
import "../components/news/News.css";
import newsimage from "../components/news/newsimage.webp";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

const News = () => {
  /*   const [newsArticles, setNewsArticles] = useState([]);
   */
  useEffect(() => {
    document.title = "News - Speculor";

    /*     const fetchNewsArticles = async () => {
      try {
        // Replace with your actual fetch call
        const response = await fetch("URL_TO_YOUR_NEWS_API");
        const data = await response.json();
        setNewsArticles(data.articles); // Update the state with fetched articles
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    };

    fetchNewsArticles(); */
  }, []);

  // Get the current date and time
  const now = new Date();

  // Format the time
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const article = [
    {
      id: "article1",
      title: "First News Article",
      shortdescription:
        "Something testing is really long, it has taken a long time. 2",
      date: `${hours}:${minutes}:${seconds}`,
    },
    {
      id: "article2",
      title: "Second News Article",
      shortdescription:
        "Something testing is really long, it has taken a long time.",
      date: `${hours}:${minutes}:${seconds}`,
      // ... other article properties
    },
    // ... more articles
  ];
  return (
    <div className="news-container">
      <div className="news-header-image-container">
        <div className="news-header-title">News</div>
      </div>
      <div className="news-list-container">
        <div className="news-list-title">Latest News and Updates</div>
        <div className="news-list">
          {article.map((article) => (
            <Link
              to={`/news/${article.id}`}
              className="news-item"
              key={article.id}
            >
              <div className="news-item-image">
                <img src={newsimage} alt="News Headline" />
              </div>
              <div className="news-item-content">
                <h3 className="news-item-title">{article.title}</h3>
                <p className="news-item-description">
                  {article.shortdescription}
                </p>
                <p className="news-item-timestamp">{article.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
