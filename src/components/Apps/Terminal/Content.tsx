import React, {
  FormEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import Title from './Title';
import Input from './Input';
import About from './Answers/About';
import Skills from './Answers/SkillsAndTools';
import Help from './Answers/Help';
import Links from './Answers/Links';
import ListFolder from './Answers/ListFolder';
import { useTab } from '@/Provider/TabProvider';
import { parseProjectCommand } from './Answers/parseProjectCommand';
import Header from './Header';

function Content() {
  const commandsHistoryRef = useRef<string[]>(
    JSON.parse(localStorage?.commandsHistory || '[]'),
  );
  const commandsHistory = commandsHistoryRef.current;
  const [, setHistoryIndex] = useState(-1);

  const { toggleTerminal } = useTab();
  const inputRef = useRef<null | HTMLInputElement>(null); //track input field (to focus)
  const [inputText, setInputText] = useState(''); //track user input
  const [content, setContent] = useState<ReactNode[]>([<Header />]); //track what is being displayed

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    let command = inputText.toLowerCase();
    commandsHistory.unshift(command);
    localStorage.setItem('commandsHistory', JSON.stringify(commandsHistory));
    setHistoryIndex(-1);
    if (command === 'exit') {
      toggleTerminal(false);
    }

    let projectName: string;
    if (inputText.startsWith('project')) {
      const [parsedCommand, parsedProjectName] = parseProjectCommand(inputText);
      command = parsedCommand;
      projectName = parsedProjectName;
    }

    setContent((prev) =>
      command === 'clear'
        ? []
        : [
            ...prev,
            <div className="mb-3">
              <Title />
              <div className="flex gap-3 mt-2 items-center">
                <p>{'>'}</p>
                <p className={`w-full py-1 text-[#ECF4D6] `}>{inputText}</p>
              </div>
              {matchAnswer(command, projectName)}
            </div>,
          ],
    );
    setInputText('');
  }

  function matchAnswer(command: string, projectName?: string) {
    const answers: {
      [key: string]: React.ReactNode;
    } = {
      about: <About />,
      skills: <Skills />,
      help: <Help />,
      links: <Links />,
      projectManual: <ListFolder content="manual" />,
      showAllProjects: <ListFolder content="all" />,
      showSingleProject: <ListFolder content="one" name={projectName} />,
    };

    return (
      answers[command] || (
        <p className="text-red-500 font-medium">
          Error: Command not found. Please type 'help' to see the list of
          available commands
        </p>
      )
    );
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        setHistoryIndex((prev) => {
          if (prev >= commandsHistory.length - 1) return prev;
          setInputText(commandsHistory[prev + 1]);
          return prev + 1;
        });
      } else if (event.key === 'ArrowDown') {
        setHistoryIndex((prev) => {
          if (prev === -1) return prev;
          setInputText(commandsHistory?.[prev - 1] || '');
          return prev - 1;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [commandsHistory]);

  return (
    <div className="p-2 tracking-wider font-extralight h-[90.2%] pb-10 overflow-y-auto">
      {...content}
      <Title />
      <Input
        handleSubmit={handleSubmit}
        inputRef={inputRef}
        inputText={inputText}
        setInputText={setInputText}
      />
    </div>
  );
}

export default Content;
