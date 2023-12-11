import { fetchNews } from "../../api/news";
import { useQuery } from "@tanstack/react-query";

const useGetNews = () =>
  useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    enabled: false,
  });

export default useGetNews;
