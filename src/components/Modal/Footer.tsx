type FooterProps = {
  children: React.ReactNode;
};

export default function Footer({ children }: FooterProps) {
  return (
    <div className='border-t border-t-gray-600 flex justify-end items-center pt-5 gap-3 mt-5'>
      {children}
    </div>
  );
}
