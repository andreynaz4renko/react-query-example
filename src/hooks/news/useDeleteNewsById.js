import { useMutation } from "@tanstack/react-query";
import { deleteNewsById } from "../../api/news";

const useDeleteNewsById = (onSuccess) =>
  useMutation({
    mutationKey: ["news", "delete"],
    mutationFn: (id) => deleteNewsById(id),
    onSuccess: onSuccess,
  });

export default useDeleteNewsById;
