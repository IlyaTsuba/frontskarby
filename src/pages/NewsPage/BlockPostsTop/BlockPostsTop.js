import { PostTop } from "./PostTop"

const BlockPostsTop = () => {
  return (
    <section className='block-w-top-info'>
      <h2 className='block-w-Top-info__title'>Топ-5</h2>
      <div className='block-w-items'>
        <PostTop />
        <PostTop />
        <PostTop />
        <PostTop />
        <PostTop />
      </div>
    </section>
  )
}

export { BlockPostsTop }