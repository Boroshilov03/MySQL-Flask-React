import React from "react";

export default function ArticleList(props) {
  return (
    <div>
      {props.articles &&
        props.articles.map((article) => {
          return (
            <div key={article.id}>
              <h1>Title : {article.title}</h1>
              <p>Title : {article.body}</p>
              <p>Title : {article.date}</p>
            </div>
          );
        })}
    </div>
  );
}
