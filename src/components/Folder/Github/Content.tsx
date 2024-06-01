import FolderView from "../View/FolderView";
import RepoItem from "./RepoItem";
import { useGetRepos } from "@/react-query/queries";
import Loader from "@/components/Loader";

function Content() {
  const getRepos = useGetRepos();

  return (
    <FolderView id='github'>
      <div className='w-full h-full p-5 overflow-y-auto pb-20'>
        <h1 className='text-3xl text-center font-open-sans font-bold uppercase tracking-wide'>
          Github Repositories
        </h1>
        <div className='w-3/4 flex flex-wrap gap-5 mx-auto mt-10 justify-center'>
          {!getRepos.isLoading && getRepos.error ? (
            <h1>{getRepos.error.message || "Could not fetch repositories"}</h1>
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
      </div>
    </FolderView>
  );
}

export default Content;
