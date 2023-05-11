import { Link } from "react-router-dom";

export const ArticlesList = ({ artList }) => {
  // console.log(artList);
  return (
    <ul>
      {artList?.map((article) => (
        <li key={article.pk}>
          <Link to={`/articles/${article.pk}`}>
            <div>
              <img src={article.image} alt="" width="100px" height="90px" />
              <p>{article.category}</p>
              <p>{article.date_added}</p>
              <h3>{article.title}</h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
