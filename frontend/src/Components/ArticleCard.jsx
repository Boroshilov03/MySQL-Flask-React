export default function ArticleCard({ articleItem }) {
  const { id, title, body, date } = articleItem;

  return (
    <div className="border p-2 text-xl shadow-md flex flex-col gap-2 ">
      <h3>Title : {title}</h3>
      <p>Body : {body}</p>
      <p>Date : {date}</p>
    </div>
  );
}
