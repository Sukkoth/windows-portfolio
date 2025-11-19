import { SetStateAction } from "react";
import { Dispatch, FormEvent, useEffect } from "react";

type InputProps = {
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (e: FormEvent) => void;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
};

function Input({
  handleSubmit,
  inputRef,
  inputText,
  setInputText,
}: InputProps) {
  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);
  return (
    <>
      {/* <Title /> */}
      <div className='flex gap-3 mt-2 items-center'>
        <p className='animate-pulse'>{"$"}</p>
        <form className='w-full' onSubmit={handleSubmit}>
          <input
            onBlur={() => inputRef.current?.focus()}
            ref={inputRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type='text'
            className='bg-transparent outline-none w-full py-1 text-[#ECF4D6]'
          />
        </form>
      </div>
    </>
  );
}

export default Input;
