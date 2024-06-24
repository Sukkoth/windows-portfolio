interface Source {
  id: string | null;
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ResponseType {
  status: string;
  totalResults: number;
  articles: Article[];
}
