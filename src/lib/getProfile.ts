import { graphql, GraphQlQueryResponseData } from '@octokit/graphql'

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
  },
})

const query = `{
  user(login: "LemmyMwaura") {
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
  }
}`

const { user, viewer }: GraphQlQueryResponseData = await graphqlWithAuth(query)
const pinneditems: GraphQlQueryResponseData = user.pinnedItems.edges.map(({ node }: any) => node)

export { viewer, pinneditems }
