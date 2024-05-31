import { Repository } from "./types";

export async function getRepos(): Promise<Repository[] | null> {
  try {
    const token = import.meta.env.VITE_GITHUB;
    if (!token) {
      console.log("🚀 ~ getRepos ~ token:", token);
      throw "No token provided";
    }
    const response = await fetch("https://api.github.com/users/sukkoth/repos");
    const data = (await response.json()) as Repository[];

    return data;
  } catch (error) {
    console.log("🚀 ~ getRepos ~ error:", error);
    return null;
  }
}
