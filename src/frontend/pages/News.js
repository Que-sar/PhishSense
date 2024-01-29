import React, { useEffect, useState } from "react";
import "../components/news/News.css";
import { Link } from "react-router-dom";
import client from "../components/news/sanityClient";
import Spinner from "../components/news/Spinner";
import { Helmet } from "react-helmet-async";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "articlePanel"]{
          title,
          shortDescription,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          publishedAt,
          "slug": slug.current
        }
      `
      )
      .then((data) => {
        setArticles(data);
      })
      .catch(console.error);
  }, []);

  //article.slug
  //article.title
  //article.shortDescription
  //article.mainImage.asset.url
  //article.publishedAt

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  const newsStructuredData = {
    "@context": "http://schema.org",
    "@type": "CollectionPage",
    name: "News - Speculor",
    description: "The latest news and updates from Speculor.",
    url: window.location.href,
  };

  return (
    <div className="news-container">
      <Helmet>
        <title>News - Speculor</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="News" />
        <meta
          property="og:description"
          content="Our latest news and updates!"
        />
        <meta property="og:url" content={window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify(newsStructuredData)}
        </script>
      </Helmet>
      <div className="news-header-image-container">
        <h1 className="news-header-title">News</h1>
      </div>
      <div className="news-list-container">
        <div className="news-list-title">Latest News and Updates</div>
        <div className="news-list">
          {articles.map((article) => (
            <Link
              to={`/news/${article.slug}`}
              className="news-item"
              key={article.slug + "-panel"}
            >
              <div className="news-item-image">
                <img src={article.mainImage.asset.url} alt={<Spinner />} />
              </div>
              <div className="news-item-content">
                <h3 className="news-item-title">{article.title}</h3>
                <p className="news-item-description">
                  {article.shortDescription}
                </p>
                <p className="news-item-timestamp">
                  {formatDate(article.publishedAt)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
