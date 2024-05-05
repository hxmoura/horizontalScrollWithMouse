import Scroll from "./Scroll"
import useScroll from "./Scroll/useScroll";

function App() {

  const { getScrollReference } = useScroll();

  return (
    <Scroll setScrollRef={getScrollReference}>
      <article className='card'>card1</article>
      <article className='card'>card1</article>
      <article className='card'>card1</article>
      <article className='card'>card1</article>
      <article className='card'>card1</article>
      <article className='card'>card1</article>
      <article className='card'>card1</article>
      <article className='card'>card1</article>
      <article className='card'>card1</article>
      <article className='card'>card1</article>
      <article className='card'>card1</article>
      <article className='card'>card1</article>
    </Scroll>
  )
}

export default App
