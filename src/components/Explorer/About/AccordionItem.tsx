import { useState } from "react";

type Props = {
  title: string;
  body: string;
  open?: boolean;
};
function AccordionItem({ title, body, open: defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className='bg-stone-300/5 border-[0.5px] border-stone-600 p-2 rounded-md px-5 divide-y-[1px] divide-stone-400'>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className='flex justify-between items-start hover:text-gray-300 cursor-pointer'
      >
        <h1 className='md:text-lg pr-3 text-gray-20 font-light'>{title}</h1>
        <div
          className={`text-2xl ${
            open ? "rotate-90" : "-rotate-90"
          } duration-300`}
        >
          &#8249;
        </div>
      </div>
      {open && <p className='text-sm pe-5 pt-2'>{body}</p>}
    </div>
  );
}

export default AccordionItem;
