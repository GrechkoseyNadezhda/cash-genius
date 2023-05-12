import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./ArticlesList.module.css";

export const ArticlesList = ({ artList }) => {
  let screenWidth = window.innerWidth;
  const [width, setWidth] = useState(screenWidth);

  // Function to handle the resize event
  function handleResize() {
    screenWidth = window.innerWidth;
    setWidth(screenWidth);
    // You can perform any additional logic or actions here
  }

  // Add event listener for the resize event
  window.addEventListener("resize", handleResize);

  useEffect(() => {
    const categoriesList = document.querySelector("[data-categories]");
    const categHidden = categoriesList.classList.contains("visually-hidden");
    const articlesList = document.querySelector("[data-articles]");
    if (width >= 768) {
      articlesList.classList.remove("visually-hidden");
      categoriesList.classList.remove("visually-hidden");
    } else if (categHidden) articlesList.classList.remove("visually-hidden");
    else articlesList.classList.add("visually-hidden");
  }, [width]);

  // console.log(artList);
  return (
    <>
      {/* {width >= 768 && ( */}
      <ul className={css.articlesList} data-articles>
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
      {/* )} */}
      {}
    </>
  );
};
