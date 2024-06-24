import { useGetNews } from "@/react-query/queries";
import NewsItem from "./NewsItem";

function NewsList() {
  const { data } = useGetNews();
  return (
    <div className='max-h-[40dvh] overflow-y-scroll'>
      {data && data.length > 0 ? (
        data?.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))
      ) : (
        <p>No news found</p>
      )}
    </div>
  );
}

export default NewsList;
