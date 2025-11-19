export interface Project {
  id: number;
  projectName: string;
  status: boolean;
  platform: "Web" | "App" | "Backend";
  description?: string;
  createdAt: string;
  updatedAt: string;
  stack?: string[];
  features?: string[];
  repository?: string;
  deploymentLink?: string;
  futurePlan?: string[];
}
