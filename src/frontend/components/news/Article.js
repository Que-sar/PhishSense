// Article.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import client from "./sanityClient";
import Spinner from "./Spinner";
import "./Article.css";
import userFace from "./user.svg";
import facebookSvg from "./roundfacebook.svg";
import linkedinSvg from "./roundlinkedin.svg";
import FooterWave from "./FooterWave.svg";

const Article = () => {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (articleId) {
      client
        .fetch(
          `*[_type == "articlePanel" && slug.current == $articleId]{title, publisher, articleBody, mainImage{asset->{url}, alt}, publishedAt}[0]`,
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
  return (
    <div className="article-container">
      {!article ? (
        <Spinner />
      ) : (
        <>
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
                <a
                  href={
                    "https://www.linkedin.com/sharing/share-offsite/?url=" +
                    window.location.href
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-linkedin-share"
                >
                  <img src={linkedinSvg} alt="Linkedin" />
                </a>
                <a
                  href={
                    "https://www.facebook.com/sharer/sharer.php?u=" +
                    window.location.href
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-facebook-share"
                >
                  <img src={facebookSvg} alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
      <img src={FooterWave} alt="Footer" />
    </div>
  );
};

export default Article;