import { Repository } from "@/services/github/types";

function RepoItem({ repo }: { repo: Repository }) {
  return (
    <a
      href={repo.html_url}
      target='_blank'
      className='w-[17rem] repo-item rounded-xl h-[20rem] bg-[#05051cb8] hover:scale-105 duration-200 p-3 border border-stone-700'
    >
      <div className='min-w-full h-full z-10 '>
        <div className='w-full h-[40%] flex items-center justify-center object-contain mb-10'>
          <img
            src='https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff'
            className='h-full'
          />
        </div>
        <div className='px-1 font-mono'>
          <h1 className='font-medium text-xl uppercase overflow-hidden text-ellipsis'>
            {repo.name}
          </h1>

          <p className='text-sm text-gray-600'>
            <span>Created at: </span>
            {new Date(repo.updated_at).toLocaleDateString()}
          </p>
          <p className='text-sm text-gray-600'>
            <span>Last Updated: </span>
            {new Date(repo.updated_at).toLocaleDateString()}
          </p>
          <p className='text-sm text-gray-600 mb-10'>
            <span>Languages: </span>
            {repo.language}
          </p>
        </div>
      </div>
    </a>
  );
}

export default RepoItem;
