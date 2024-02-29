import "./App.css";
import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";

function App() {
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
      <p className="text-lg text-orange-600">Hello World!</p>
      <ArticleList articles= {articles} />
    </div>
  );
}

export default App;
