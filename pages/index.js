export default function Home({ posts }) {
  console.log('POSTS', posts)
  return (
    <div>
      <h1>My Hashnode Articles</h1>
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      posts: [],
    },
  }
}
