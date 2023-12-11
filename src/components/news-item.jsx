import useGetNewsById from "../hooks/news/useGetNewsById";
import { useNavigate, useParams } from "react-router-dom";
import useDeleteNewsById from "../hooks/news/useDeleteNewsById"; // localhost:3000/news/:id

// localhost:3000/news/:id
// localhost:3000/news/5
const NewsItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, isError } = useGetNewsById(id);
  const { isPending, mutate } = useDeleteNewsById(() => navigate("/"));

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }

  if (isError) {
    return <h2>Ошибка загрузки. Перезагрузите страницу</h2>;
  }

  return (
    <div className="flex flex-col rounded-xl">
      <h2 className="flex items-center justify-between">
        <span>
          {data.id}. {data.title}
        </span>
        <span
          onClick={() => mutate(id)}
          className="material-symbols-rounded text-red-800 hover:text-red-600 cursor-pointer"
        >
          {isPending ? "sync" : "delete"}
        </span>
      </h2>
      <p>{data.content}</p>
    </div>
  );
};

export default NewsItem;
