import { JSX } from "react"
import { faqItems } from "../../data/faqItems";
import { BsQuestionDiamond } from "react-icons/bs";

const FAQ = (): JSX.Element => {

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-14">
      <h3
        className="text-center text-4xl font-semibold mb-8 flex justify-center items-center gap-3"
        data-aos="zoom-out"
        data-aos-duration="1750"
      >
        Frequently Asked Questions <BsQuestionDiamond className="hidden sm:block" />
      </h3>
      <article className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
            <div className="collapse-title font-semibold">{item.question}</div>
            <div className="collapse-content text-sm">{item.answer}</div>
          </div>
        ))}
      </article>
    </section>
  )
}

export default FAQ