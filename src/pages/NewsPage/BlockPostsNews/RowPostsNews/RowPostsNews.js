import { PostNews } from "./PostNews"

const RowPostsNews = ({posts}) => {
  return (
    <>
    {posts && posts.length === 1 ?
      (
        <div className='block-row-w-post' >
          <PostNews post={posts[0]}/>
        </div>
      )
      : posts && posts.length === 2 ? 
      (
        <div className='block-row-w-posts' >
          <PostNews post={posts[0]}/>
          <PostNews post={posts[1]}/>
        </div> 
      ) : ''
    }
    </>
  )
}

export { RowPostsNews }