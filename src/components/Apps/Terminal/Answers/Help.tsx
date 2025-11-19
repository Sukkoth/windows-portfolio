function Help() {
  const commandDescriptions: {
    [key: string]: string;
  } = {
    about: "Provides information about the developer",
    help: "Lists all available commands and their descriptions.",
    skills: "Displays a list of skills.",
    tools: "Displays a list of tools used.",
    links: "Provides relevant links related to the developer",
    project: "Displays a list of projects.",
    clear: "Clears the terminal or console screen.",
    exit: "Exits the application.",
  };
  return (
    <div className='w-full md:w-[70%] lg:w-[50%] space-y-4'>
      {Object.keys(commandDescriptions).map((command) =>
        command === "project" ? (
          <div className='font-light' key={command}>
            <h4 className='font-medium py-3 text-[#ECF4D6]'>
              project {"<command>"}{" "}
            </h4>
            <p className='py-2'>Usage:</p>
            <div>
              <div className='grid grid-cols-2 gap-1'>
                <p className='ms-8'>project -a</p>
                <p className='ms-8'>Display all the projects</p>
              </div>
              <div className='grid grid-cols-2 gap-1 mt-3'>
                <p className='ms-8'>project show {"<projectname>"} </p>
                <p className='ms-8'>Show the details of the given project</p>
              </div>
            </div>
          </div>
        ) : (
          <div key={command}>
            <h4 className='font-medium text-[#ECF4D6]'>{command}</h4>
            <p className='ms-8'>{commandDescriptions[command]}</p>
          </div>
        )
      )}
    </div>
  );
}

export default Help;
