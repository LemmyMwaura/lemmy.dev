function* idGenerator() {
  let id = 1

  while (true) {
    yield id++
  }
}

const generate = idGenerator()

const portfolio = [
  {
    id: generate.next().value,
    name: 'Sudoku Solver Visualiser',
    description: 'Sudoku solver implemeneted using a Backtracking algorithm',
    status: 'active',
    category: '',
    liveLink: 'https://sudoku-solver-bylemmymwaura.netlify.app/',
    githubLink: 'https://github.com/LemmyMwaura/Sudoku-Solver-Visualizer',
    stats: ['React', 'Vite'],
  },
  {
    id: generate.next().value,
    name: 'The Daily News',
    description:
      'A Flask News App that consumes the NewsApi (newsapi.org) and displays articles/news to our user(s)',
    status: 'active',
    category: '',
    liveLink: 'https://thedailynewsbylemmymwaura.herokuapp.com/',
    githubLink: 'https://github.com/LemmyMwaura/The-daily-news',
    stats: ['Flask', 'NewsAPI', 'Requests'],
  },
  {
    id: generate.next().value,
    name: 'Awwards Remake',
    description: 'My recreation of the famous Awwards website.',
    status: 'active',
    category: '',
    liveLink: 'https://awwwardsclonebylemmymwaura.herokuapp.com/',
    githubLink: 'https://github.com/LemmyMwaura/Awwards-clone',
    stats: ['Django', 'PostgreSQL', 'Django-Auth', 'cloudinary'],
  },
  {
    id: generate.next().value,
    name: 'Neighbourhood Watch',
    description: 'Getup to date on the latest news in your neighbourhood',
    status: 'active',
    category: '',
    liveLink: 'https://neighbourhoodwatchbylemmy.herokuapp.com/',
    githubLink: 'https://github.com/LemmyMwaura/Neighbourhood_Watch',
    stats: ['Django', 'PostgreSQL', 'Django-Auth', 'cloudinary'],
  },
  {
    id: generate.next().value,
    name: 'Github Stats App',
    description: 'Get the latest stats from your github account',
    status: 'active',
    category: '',
    liveLink: 'https://lemmymwaura.github.io/GithubSearch-App',
    githubLink: 'https://github.com/LemmyMwaura/GithubSearch-App',
    stats: ['Angular', 'Angular-router', 'Github API'],
  },
]

export { portfolio }
