// Article.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import client from "./sanityClient";
import Spinner from "./Spinner";
import "./Article.css";

const Article = () => {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (articleId) {
      client
        .fetch(
          `*[_type == "articlePanel" && slug.current == $articleId]{title, articleBody, mainImage{asset->{url}, alt}, publishedAt}[0]`,
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

  return (
    <div className="article-container">
      {!article ? (
        <Spinner />
      ) : (
        <div key={article.slug + "-container"}>
          <h1>{article.title}</h1>
          <img src={article.mainImage.asset.url} alt={article.mainImage.alt} />
          <p dangerouslySetInnerHTML={{ __html: article.articleBody }}></p>
          <p>
            Published on: {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Article;
