import useGetNews from "../hooks/news/useGetNews";
import useDeleteNewsById from "../hooks/news/useDeleteNewsById";

function NewsList() {
  const { data, isLoading, refetch } = useGetNews();
  const { isPending, mutate } = useDeleteNewsById(() => refetch());

  return (
    <div className="flex flex-col gap-2">
      <a
        className="flex px-4 py-2 justify-center items-center cursor-pointer bg-emerald-900 text-white rounded-xl"
        href="/news/add"
      >
        Добавить новость
      </a>
      <div className="flex flex-col gap-2">
        {data &&
          data.map((newsItem) => (
            <div
              key={newsItem.id}
              className="flex items-center justify-between"
            >
              <a href={`/news/${newsItem.id}`}>{newsItem.title}</a>
              <span
                onClick={() => mutate(newsItem.id)}
                className="material-symbols-rounded text-red-800 hover:text-red-600 cursor-pointer"
              >
                {isPending ? "sync" : "delete"}
              </span>
            </div>
          ))}
      </div>
      <button
        className="flex px-4 py-2 justify-center items-center cursor-pointer bg-cyan-200 rounded-xl"
        onClick={refetch}
      >
        {isLoading ? "Загрузка..." : "Загрузить"}
      </button>
    </div>
  );
}

export default NewsList;
