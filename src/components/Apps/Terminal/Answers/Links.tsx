import { links } from "@/components/Explorer/Links/links";

function Links() {
  return (
    <div className='w-full md:w-[70%] lg:w-[50%]'>
      <p className='p-2'>You can contact me using any of the provided links</p>
      <ul className='list-disc list-inside space-y-2'>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target='_blank' className='text-yellow-500'>
              {link.title}
            </a>
            <span>🔗</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Links;
