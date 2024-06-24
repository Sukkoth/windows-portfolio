import { Article, ResponseType } from "./types";

export default async function GET_NEWS(): Promise<Article[] | null> {
  const token = import.meta.env.VITE_NEWS_KEY;
  if (!token) {
    throw "No token provided";
  }
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=10&page=1`,
    {
      headers: {
        "X-Api-Key": token,
      },
    }
  );
  const data: ResponseType = await response.json();

  if (data.status !== "ok") {
    throw "Could not fetch news";
  }

  return data?.articles as Article[];
}
