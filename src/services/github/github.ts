import { Repository } from "./types";

export async function GET_REPOS(): Promise<Repository[] | null> {
  const token = import.meta.env.VITE_GITHUB;
  if (!token) {
    throw "No token provided";
  }
  const response = await fetch("https://api.github.com/users/sukkoth/repos", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  const data = (await response.json()) as Repository[];

  return data;
}
