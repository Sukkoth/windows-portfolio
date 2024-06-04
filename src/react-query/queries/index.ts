import { useQuery } from "@tanstack/react-query";
import * as GITHUB_SERVICE from "@/services/github/github";
import * as WEATHER_SERVICE from "@/services/weather";
import { Position } from "@/services/weather/types";

export function useGetRepos() {
  return useQuery({
    queryKey: ["repos"],
    queryFn: GITHUB_SERVICE.GET_REPOS,
    staleTime: 4_000_000, // for 1 hour, there won't be much data to be changed
  });
}

export function useGetWeatherData(position: Position | null) {
  return useQuery({
    queryKey: ["weather", position],
    queryFn: () => WEATHER_SERVICE.GET_WEATHER(position),
    staleTime: 4_000_000,
  });
}
