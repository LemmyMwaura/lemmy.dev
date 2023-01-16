interface langProp {
  edges: {
    node: {
      name: string
    }
  }[]
}

interface repoDetails {
	id: string,
  name: string,
	description: string,
  forkCount: number,
  stargazerCount: number,
  url: string,
  languages: langProp,
}


export type { repoDetails }
