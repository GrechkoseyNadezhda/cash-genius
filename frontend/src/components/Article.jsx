import { Link, useLocation } from "react-router-dom";
export const Article = ({ post }) => {
  const location = useLocation();
  return (
    <Link to={`${post.pk}`} state={{ from: location }}>
      <h4>{post.title}</h4>
      <h5>{post.author}</h5>
      <p>{post.content}</p>
    </Link>
  );
};
