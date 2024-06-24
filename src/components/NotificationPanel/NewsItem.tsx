import { Article } from "@/services/news/types";

function NewsItem({ article }: { article: Article }) {
  return (
    <div className='mb-4 bg-stone-700/90 rounded-md z-[9999] font-extralight text-xs p-3'>
      <h2 className='tracking-wider pb-2'>{article.title}t</h2>
      <a
        href={article.url}
        target='_blank'
        className='text-blue-500 underline cursor-pointer'
      >
        Read More
      </a>
    </div>
  );
}

export default NewsItem;
