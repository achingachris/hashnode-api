import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export default function Home({ posts }) {
  console.log('POSTS', posts)
  return (
    <div>
      <h1>My Hashnode Articles</h1>

      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <a href={`https://chrisdevcode.hashnode.dev/${post.slug}`}>Read</a>
          </div>
        )
      })}
    </div>
  )
}

export async function getStaticProps(context) {
  const client = new ApolloClient({
    uri: 'https://api.hashnode.com/',
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        user(username: "chrisdevcode") {
          publication {
            posts(page: 0) {
              _id
              coverImage
              slug
              title
              brief
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      posts: data.user.publication.posts,
    },
  }
}
