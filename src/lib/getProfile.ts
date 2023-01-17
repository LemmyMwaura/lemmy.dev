import axios from 'axios';
const URL = 'https://api.github.com/graphql';

const response = await axios(URL, {
  method: 'post',
  headers: {
    'Content-Type':'application/json',
    authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
  },
  data: {
    query: `query { user(login: "LemmyMwaura") {
        pinnedItems(first: 6) {
          totalCount
          edges {
            node {
              ... on Repository {
                id
                name
                description
                forkCount
                stargazerCount
                url
                languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
      viewer {
        avatarUrl
        login
      }}`,
  },
})

const { user, viewer }: any = response.data.data
const pinneditems: any = user.pinnedItems.edges.map(
  ({ node }: any) => node
)

export { viewer, pinneditems }
