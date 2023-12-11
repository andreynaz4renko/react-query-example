import { fetchNewsById } from "../../api/news";
import { useQuery } from "@tanstack/react-query";

const useGetNewsById = (id) =>
  useQuery({
    queryKey: ["news", id],
    queryFn: () => fetchNewsById(id),
  });

export default useGetNewsById;
