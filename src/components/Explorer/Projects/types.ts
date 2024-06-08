export interface Project {
  id: number;
  projectName: string;
  status: boolean;
  platform: "Web" | "App" | "Backend";
  createdAt: string;
  updatedAt: string;
}
