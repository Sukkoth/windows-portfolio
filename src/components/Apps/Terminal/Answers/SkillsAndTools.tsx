function SkillsAndTools() {
  const skills = [
    'TypeScript',
    'Tailwind CSS',
    'ReactJS',
    'NextJS',
    'NodeJS',
    'ExpressJS',
    'NestJS',
    'PostgresSQL',
    'ScyllaDb',
    'MongoDB',
    'RabbitMq',
    'BullMq',
    'System Design',
    'Microservices',
  ];

  return (
    <div className="w-full md:w-[70%] lg:w-[50%]">
      <ul className="grid grid-cols-2 list-disc list-inside">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsAndTools;
