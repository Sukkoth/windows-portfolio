export function parseProjectCommand(inputText: string) {
  const [command, flag, projectName] = inputText.split(" ");

  if (command !== "project") {
    return [command];
  }
  if (!flag && !projectName) {
    return ["projectManual"];
  }

  if (!projectName && flag === "show") {
    return ["projectManual"];
  }

  if (!projectName && flag === "-a") {
    return ["showAllProjects"];
  }

  //incase user inputs 'project xxxxxx'
  if (flag !== "show") {
    return [];
  }

  return ["showSingleProject", projectName];
  //
}
