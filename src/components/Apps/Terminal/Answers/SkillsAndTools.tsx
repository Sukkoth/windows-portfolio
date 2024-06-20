function SkillsAndTools({ showTools = false }: { showTools?: boolean }) {
  const skills = [
    "JavaScript",
    "TypeScript",
    "PHP",
    "CSS",
    "HTML",
    "Tailwind CSS",
    "ChakraUI",
    "Bootstrap",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "NestJS",
    "Laravel",
    "MySQL",
    "MongoDB",
  ];

  const tools = [
    "VSCode",
    "Edge",
    "Brave",
    "Github",
    "Postman",
    "NPM",
    "Terminal",
    "Supabase",
    "ChatGPT",
    "Gemini",
    "MongoDB Atlas",
    "ESlint",
  ];

  return (
    <div className='w-full md:w-[70%] lg:w-[50%]'>
      <ul className='grid grid-cols-2 list-disc list-inside'>
        {showTools
          ? tools.map((tool) => <li key={tool}>{tool}</li>)
          : skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  );
}

export default SkillsAndTools;
