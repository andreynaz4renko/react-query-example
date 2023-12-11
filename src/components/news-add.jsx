import { useState } from "react";
import useAddNews from "../hooks/news/useAddNews";

const NewsAdd = () => {
  const [newsTitle, setNewsTitle] = useState("");
  const [newsText, setNewsText] = useState("");

  const onSuccess = () => {
    setNewsTitle("");
    setNewsText("");
  };

  const { isPending, isError, isSuccess, error, mutate } =
    useAddNews(onSuccess);

  if (isPending) {
    return <h2>Новость добавляется на сервер...</h2>;
  }

  return (
    <div className="flex flex-col gap-1">
      {isError && <h3 className="text-red-800">{error.message}</h3>}
      {isSuccess && (
        <h3 className="text-emerald-200">Новость успешно добавлена</h3>
      )}
      <label className="flex gap-1">
        Заголовок
        <input
          value={newsTitle}
          onChange={(e) => setNewsTitle(e.target.value)}
          type="text"
        />
      </label>
      <label className="flex gap-1">
        Текст
        <input
          value={newsText}
          onChange={(e) => setNewsText(e.target.value)}
          type="text"
        />
      </label>
      <button
        className="flex px-4 py-2 justify-center items-center cursor-pointer bg-cyan-200 rounded-xl"
        onClick={() => mutate({ id: 0, title: newsTitle, content: newsText })}
        disabled={isPending}
      >
        Добавить новость
      </button>
    </div>
  );
};

export default NewsAdd;
