import { ItemFromBlockTop } from "./ItemFromBlockTop"

const BlockTop = () => {
  return (
    <section className='block-w-top-info'>
      <h2 className='block-w-Top-info__title'>Топ-5</h2>
      <div className='block-w-items'>
        <ItemFromBlockTop />
        <ItemFromBlockTop />
        <ItemFromBlockTop />
        <ItemFromBlockTop />
        <ItemFromBlockTop />
      </div>
    </section>
  )
}

export { BlockTop }