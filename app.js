const tag = document.getElementById('tag')
const blogUser = document.getElementById('username')
const content = document.getElementById('content')

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
    console.log(data.data.user.publication)

    data.forEach((content) => {
      content.innerHTML = 
      `
        <div class="card">
          <h5 class="card-header">Featured</h5>
          <img src="${content.post.coverImage}" class="card-img-top img-fluid" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      `
    })
  })
