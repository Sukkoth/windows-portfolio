import { useState } from "react";

function Content() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <iframe
        onLoad={() => setIsLoading(false)}
        className='webview h-full w-full'
        src='https://taskmate-beryl.vercel.app'
      ></iframe>
      {isLoading && (
        <div className='absolute inset-0 flex justify-center items-center backdrop-blur-xl'>
          <h1 className='text-stone-400 text-xl animate-pulse'>
            Loading . . . .{" "}
          </h1>
        </div>
      )}
    </>
  );
}

export default Content;
