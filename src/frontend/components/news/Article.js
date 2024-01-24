// Article.js
import React /* { useEffect, useState } */ from "react";
/* import { useParams } from "react-router-dom"; */

const Article = () => {
  /*   const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {

        document.title = "News - article.title"; insert this somewhere!!!
    const fetchArticle = async () => {
      try {
        // Replace with your actual API call
        const response = await fetch(`YOUR_API_ENDPOINT/${articleId}`);
        if (!response.ok) throw new Error('Article not found');
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        // Redirect to 404 page if the article is not found
        navigate('/404');
      }
    };

    fetchArticle();
  }, [articleId, navigate]);
  if (!article) {
    return <div>Loading...</div>;
  } */

  return (
    <div>
      {/*       <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.content}</p> */}
    </div>
  );
};

export default Article;
