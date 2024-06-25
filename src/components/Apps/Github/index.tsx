import RepoItem from "./RepoItem";
import { useGetRepos } from "@/react-query/queries";
import Loader from "@/components/Loader";

function Github() {
  const getRepos = useGetRepos();
  return (
    <>
      <h1 className='text-xl sm:text-2xl lg:text-3xl text-center font-bold tracking-wide pt-6'>
        Gadisa's Github Repositories
      </h1>
      {getRepos.isLoading ? (
        <div className='h-full w-full'>
          <Loader transparent />
        </div>
      ) : (
        <div className='w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 flex-wrap gap-5 mx-auto mt-10 justify-center pb-16'>
          {!getRepos.isLoading && getRepos.error ? (
            <h1>{"Could not fetch repositories"}</h1>
          ) : !getRepos.isLoading ? (
            getRepos.data?.length ? (
              getRepos.data.map((repo) => (
                <RepoItem repo={repo} key={repo.id} />
              ))
            ) : (
              <h1>No repo data found</h1>
            )
          ) : (
            <Loader />
          )}
        </div>
      )}
    </>
  );
}

export default Github;
