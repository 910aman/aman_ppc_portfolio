import routes from "../../routes/routes"
import { JSX } from "react"

const { contact, gallery } = routes

const HomeContact = (): JSX.Element => {

  return (
    <section
      id="home-contact-section"
      className="w-full min-h-screen hero over-hidden"
      aria-labelledby="home-contact-title"
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2
            id="home-contact-title"
            className="text-5xl font-bold text-white"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            Let's Connect
          </h2>
          <p
            className="home-contact-text py-6 text-xl text-white"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className="flex justify-center items-center gap-3" aria-label="Contact buttons section">
            <a
              className="btn btn-outline dark:text-white dark:hover:text-white text-white hover:text-black"
              href={contact}
              title="Go to Contact page"
            >
              Contact Me
            </a>
            <a
              className="btn btn-outline dark:text-white dark:hover:text-white text-white hover:text-black"
              href={gallery}
              title="Go to Gallery page"
            >
              See Works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContact