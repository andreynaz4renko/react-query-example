import { useMutation } from "@tanstack/react-query";
import { addNews } from "../../api/news";

const useAddNews = (onSuccess) =>
  useMutation({
    mutationKey: ["news", "add"],
    mutationFn: (news) => addNews(news),
    onSuccess: onSuccess,
  });

export default useAddNews;
