import { JSX } from "react"

const quote: string = "My work is driven by the idea that visual storytelling and images have the power to change the world"
const author: string = "Alice Aedy"

const QuoteSection = (): JSX.Element => {

  return (
    <section
      className="w-full min-h-screen px-5 flex flex-col justify-center items-center over-hidden"
      id="home-quote-section"
      aria-label="Inspiring quote intermediate section"
    >
      <blockquote className="home-blockquote text-white text-center max-w-[85%]">
        <p className="text-3xl pb-5" data-aos="fade-up" data-aos-duration="1500">
          <q>{quote}</q>
        </p>
        <cite className="text-2xl" data-aos="fade-up" data-aos-duration="2000">
          — {author}
        </cite>
      </blockquote>
    </section>
  )
}

export default QuoteSection