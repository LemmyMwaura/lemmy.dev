interface projectProps {
  id: number | void;
  name: string;
  description: string;
  status: string;
  category: string;
  liveLink: string;
  githubLink: string;
  stats: string[];
}

export type { projectProps }
