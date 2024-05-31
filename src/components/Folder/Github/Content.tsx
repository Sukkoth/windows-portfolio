import { useEffect, useState } from "react";
import FolderView from "../View/FolderView";
import { getRepos } from "@/services/github/github";
import { Repository } from "@/services/github/types";
import RepoItem from "./RepoItem";

function Content() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    async function getReposApi() {
      const repos = await getRepos();
      if (repos) {
        setRepositories(repos);
      }
    }
    getReposApi();
  }, []);
  return (
    <FolderView id='github'>
      <div className='w-full h-full stars-cover p-5 overflow-y-auto pb-20'>
        <h1 className='text-3xl text-center font-open-sans font-bold uppercase tracking-wide'>
          Github Repositories
        </h1>
        <div className='w-3/4 flex flex-wrap gap-5 mx-auto mt-10 justify-center'>
          {repositories.length ? (
            repositories.map((repo) => <RepoItem repo={repo} key={repo.id} />)
          ) : (
            <h1>No repo data found</h1>
          )}
        </div>
      </div>
    </FolderView>
  );
}

export default Content;
