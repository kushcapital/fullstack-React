import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

const fetchTasks = async ({ queryKey }) => {
  const [_key, { order = "asc", limit = 10, page = 1 }] = queryKey;
  const token = Cookies.get({ token });

  const url = new URL(`${import.meta.env.VITE_API_URL}tasks`);
  url.searchParams.append("order", order);
  url.searchParams.append("limit", limit);
  url.searchParams.append("page", page);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export function useFetchTasks(param = {}) {
  return useQuery({
    queryKey: ["fetchTasks", params],
    queryFn: "",
    onSucess: (response) => {
      console.log("Tasks fetched sucessfully", response);
    },
    onError: (error) => {
      console.log("Error fetching tasks", error);
    },
  });
}
