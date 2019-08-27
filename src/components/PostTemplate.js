import React from 'react'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const PostTemplate = (props) => {
  let disqusConfig = {
    url: `https://max923.github.io/maxfun.io/`,
    identifier: props.identifier,
    title: props.title,
  }
  return (
    <React.Fragment>
      <h1>{'評論'}</h1>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      /* Post Contents */
      <Disqus config={disqusConfig} />
    </React.Fragment>
  )
}

export default PostTemplate