import { ReactNode } from "react";

function Title() {
  return (
    <div className='flex text-xs font-mono'>
      <TitleContainer className='bg-[#ECF4D6]'>
        <img
          className='size-4'
          src='https://img.icons8.com/?size=100&id=tpIcYSg4KMn0&format=png&color=000000'
          alt='win'
        />
      </TitleContainer>
      <TitleContainer className='bg-[#9AD0C2]'>
        <img
          className='size-4'
          src='https://img.icons8.com/?size=100&id=1KYVYmTO3ntN&format=png&color=ffffff'
          alt='folder'
        />
        <p>~</p>
      </TitleContainer>
      <TitleContainer className='bg-[#265073] rounded-e-xl'>
        <img
          className='size-4'
          src='https://img.icons8.com/?size=100&id=422&format=png&color=ffffff'
          alt='clock'
        />
        {new Date().toDateString()}
      </TitleContainer>
    </div>
  );
}

type ContainerPros = {
  children: ReactNode;
  className: string;
};
function TitleContainer({ children, className }: ContainerPros) {
  return (
    <div className={`py-1 flex items-center gap-1 px-6 ${className}`}>
      {children}
    </div>
  );
}

export default Title;
