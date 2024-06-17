import { links } from "../Links/links";
import AccordionList from "./AccordionList";

function About() {
  return (
    <div className='flex-1 h-full border border-stone-600 border-t-0 flex flex-col md:justify-start md:flex-row p-2 pb-5 overflow-y-auto gap-5 md:gap-0'>
      <div>
        <img
          className='border-[0.5px] md:mt-7 border-stone-600 md:h-5/6 w-3/4 sm:w-2/4 md:w-[70%] mx-auto object-cover rounded-full md:rounded-xl md:max-h-[35rem]'
          src='https://media.licdn.com/dms/image/D4E03AQEj-8L526_MEA/profile-displayphoto-shrink_800_800/0/1669385084111?e=1723680000&v=beta&t=eWEnoUPK6oHN3Gkxv__7GaC6j0pEIyIpR3PrWjp38Yk'
          alt='profile'
        />
        <p className='text-center pt-5 text-lg font-medium md:text-xl'>
          Gadisa Teklu
        </p>
        <p className='text-center text-sm text-gray-400'>Web Developer</p>
        <div className='mt-2 flex justify-center items-center gap-6'>
          <img
            onClick={() => window.open(links[1]?.url, "_blank")}
            src='https://img.icons8.com/?size=100&id=63306&format=png&color=000000'
            className='size-12 border-[0.5px] border-stone-600 rounded-lg p-1 hover:bg-stone-600/50 cursor-pointer'
            alt=''
          />
          <img
            onClick={() => window.open(links[2]?.url, "_blank")}
            src='https://img.icons8.com/?size=100&id=106562&format=png&color=ffffff'
            className='size-12 border-[0.5px] border-stone-600 rounded-lg p-1 hover:bg-stone-600/50 cursor-pointer'
            alt=''
          />
          <img
            onClick={() => window.open(links[0]?.url, "_blank")}
            src='https://img.icons8.com/?size=100&id=13930&format=png&color=000000'
            className='size-12 border-[0.5px] border-stone-600 rounded-lg p-1 hover:bg-stone-600/50 cursor-pointer'
            alt=''
          />
        </div>
      </div>
      <AccordionList />
    </div>
  );
}

export default About;
