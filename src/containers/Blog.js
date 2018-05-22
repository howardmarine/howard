
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ posts }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.index}>
          <Link to={`/blog/post/${post.index}/`}>{post.name}</Link>
        </li>
      ))}
    </ul>
  </div>
))
