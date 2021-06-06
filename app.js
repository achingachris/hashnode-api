const tag = document.getElementById('tag')
const blogUser= document.getElementById('username')

fetch('https://api.hashnode.com/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
        query {
            user(username: "chrisdevcode") {
                username
                tagline
                location
                numFollowers
                blogHandle
                socialMedia {
                  twitter
                  github
                  linkedin
                  facebook
                }
                publication {
                  posts(page: 0) {
                    coverImage
                    title
                    brief
                    slug
                  }
                }
              }
        }
    `,
  }),
})
  .then((res) => res.json())
  .then((data) => {
    tag.innerHTML = `${data.data.user.tagline}`
    blogUser.innerHTML = `${data.data.user.username}`
    console.log(data)
  })
