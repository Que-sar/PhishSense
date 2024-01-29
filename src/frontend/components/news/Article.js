// Article.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import client from "./sanityClient";
import Spinner from "./Spinner";
import "./Article.css";
import userFace from "./user.svg";
import FooterWave from "./FooterWave.svg";
import SocialsReq from "./SocialsReq";
import { Helmet } from "react-helmet-async";

const Article = () => {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (articleId) {
      client
        .fetch(
          `*[_type == "articlePanel" && slug.current == $articleId]{title, publisher, articleBody, shortDescription, mainImage{asset->{url}, alt}, publishedAt}[0]`,
          { articleId }
        )
        .then((data) => {
          if (data) {
            setArticle(data);
          } else {
            navigate("/not-found", { replace: true });
          }
        })
        .catch(() => {
          navigate("/not-found", { replace: true });
        });
    }
  }, [articleId, navigate]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  const structuredData = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.shortDescription,
    image: article.mainImage.asset.url,
    author: article.author,
    datePublished: article.date,
  };

  return (
    <div className="article-container">
      {!article ? (
        <Spinner />
      ) : (
        <article>
          <Helmet>
            <title>Home - {article.title}</title>
            <meta property="og:type" content="article" />
            <meta property="og:title" content={article.title} />
            <meta
              property="og:description"
              content={article.shortDescription}
            />
            <meta property="og:image" content={article.mainImage.asset.url} />
            <meta property="og:url" content={window.location.href} />
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          </Helmet>
          <div
            className="article-image"
            style={{ backgroundImage: `url(${article.mainImage.asset.url})` }}
          ></div>
          <div key={article.slug + "-container"}>
            <div className="article-content">
              <h1 className="article-title">{article.title}</h1>
              <p
                className="article-body"
                dangerouslySetInnerHTML={{ __html: article.articleBody }}
              ></p>
              <span className="horizontal-separator"></span>
              <div className="article-author">
                <img
                  src={userFace}
                  className="author-image-placeholder"
                  alt="author"
                />
                <p className="author-name">
                  Written by:
                  <br /> {article.publisher}
                </p>
              </div>
              <p className="article-publish-date">
                {formatDate(article.publishedAt)}
              </p>
              <div className="socials-holder">
                <SocialsReq
                  title={article.title}
                  image={article.mainImage.asset.url}
                  shortDescription={article.shortDescription}
                  author={article.publisher}
                  date={article.publishedAt}
                />
              </div>
            </div>
          </div>
        </article>
      )}
      <img src={FooterWave} alt="Footer" />
    </div>
  );
};

export default Article;
