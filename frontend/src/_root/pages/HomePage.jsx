import React, { useEffect, useState } from "react";
import ArticleCard from "../../Components/ArticleCard";

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setArticles(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <p className="text-lg font-semibold text-orange-600">Near Locations: </p>
      {articles.map((article) => (
        <ArticleCard key={article.id} articleItem={article} />
      ))}
    </div>
  );
};

export default HomePage;
