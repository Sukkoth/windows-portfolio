import { useGetNews } from "@/react-query/queries";
import NewsItem from "./NewsItem";

function NewsList() {
  const { data, refetch, isLoading, isError } = useGetNews();
  return (
    <div className='max-h-[40dvh] overflow-y-scroll mb-3'>
      {!isLoading && data && data.length > 0 ? (
        <>
          <h1 className='bg-stone-700/90 text-center font-medium tracking-wider rounded-md mb-2 z-[9999] p-3'>
            Latest Tech News
          </h1>
          {data?.map((article, index) => (
            <NewsItem key={index} article={article} />
          ))}
        </>
      ) : (
        <div className='mb-4 bg-stone-700/90 rounded-md z-[9999] font-extralight text-xs p-3 flex justify-between'>
          {isLoading && <p>Loading . . .</p>}
          {!isLoading && isError && (
            <>
              <p>Could not fetch news</p>
              <p
                onClick={() => refetch()}
                className='text-blue-500 font-medium cursor-pointer underline hover:text-blue-400'
              >
                Refetch
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default NewsList;
