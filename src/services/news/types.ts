export interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  image: string | null;
  language: string;
  category: string[];
  published: string;
}

export interface ResponseType {
  status: string;
  page: number;
  news: Article[];
}
