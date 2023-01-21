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
    name: 'Infisical',
    description:
      'Infisical is an open-source, end-to-end encrypted tool to sync secrets and configs across your team and infrastructure.',
    status: 'active',
    category: 'Open Source',
    liveLink: 'https:/infisical.com',
    githubLink: 'https://github.com/Infisical/infisical',
    stats: ['Next','Node', 'Go-lang', 'secrets management'],
  },
  {
    id: generate.next().value,
    name: 'Elewa',
    description: 'The Elewa Conversational Manager. An open-source chatbot editor and manager which allows to host and use conversational learning projects.',
    status: 'active',
    category: 'Open Source',
    liveLink: '',
    githubLink: 'https://github.com/italanta/elewa',
    stats: ['Angular', 'Angular Material', 'Firebase', 'GCP'],
  },
  {
    id: generate.next().value,
    name: 'RTC Fire',
    description: 'A simple WebRTC video chat app with firebase as the signaling server.',
    status: 'active',
    category: 'Personal Project',
    liveLink: 'https://rtc-fire.vercel.app/',
    githubLink: 'https://github.com/LemmyMwaura/RTC-Fire',
    stats: ['TypeScript + Vite', 'WebRTC', 'Firebase'],
  },
  {
    id: generate.next().value,
    name: 'StoreFront',
    description: 'A Headless, Optimized, SEO Rich, Ecommerce StoreFront. Currently Integrated with Shopify.',
    status: 'active',
    category: 'Personal Project',
    liveLink: 'https://store-front-ivory.vercel.app/',
    githubLink: 'https://github.com/LemmyMwaura/StoreFront',
    stats: ['turborepo', 'headless', 'graphql', 'shopify', 'nextjs'],
  },
  {
    id: generate.next().value,
    name: 'create-t3-app',
    description: 'The best way to start a full-stack, typesafe Next.js app.',
    status: 'active',
    category: 'Open Source',
    liveLink: 'https://create.t3.gg/',
    githubLink: 'https://github.com/t3-oss/create-t3-app',
    stats: ['Next', 't3', 'cli', 'astro', 'turborepo'],
  },
  {
    id: generate.next().value,
    name: 'Sudoku Solver Visualiser',
    description: 'Sudoku solver implemeneted using a Backtracking algorithm.',
    status: 'active',
    category: 'Personal Project',
    liveLink: 'https://sudoku-gg.netlify.app/',
    githubLink: 'https://github.com/LemmyMwaura/Sudoku-Solver-Visualizer',
    stats: ['React', 'Vite'],
  },
]

export { portfolio }
