import { useQuery } from "@tanstack/react-query";
import * as GITHUB_SERVICE from "@/services/github/github";

export function useGetRepos() {
  return useQuery({
    queryKey: ["repos"],
    queryFn: GITHUB_SERVICE.GET_REPOS,
  });
}
