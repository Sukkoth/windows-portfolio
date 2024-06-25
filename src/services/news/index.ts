import { Article, ResponseType } from "./types";

export default async function GET_NEWS(): Promise<Article[] | null> {
  const token = import.meta.env.VITE_NEWS_KEY;
  if (!token) {
    throw "No token provided";
  }

  const response = await fetch(
    `https://api.currentsapi.services/v1/search?language=en&country=us&category=technology&apiKey=36EQkOo-zTos5oJ9AQSQEUUCkDyzvjSaOx5lvmsiZ9JNU9B4`
  );
  const data: ResponseType = await response.json();

  if (data.status !== "ok") {
    throw "Could not fetch news";
  }

  return data?.news as Article[];
}
