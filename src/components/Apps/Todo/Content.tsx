import Loader from "@/components/Loader";
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
        <div className='absolute inset-0 top-9 flex justify-center items-center backdrop-blur-xl'>
          <Loader />
        </div>
      )}
    </>
  );
}

export default Content;
