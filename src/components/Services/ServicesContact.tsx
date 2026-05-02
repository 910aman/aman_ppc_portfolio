import { JSX } from "react"
import routes from "../../routes/routes"

const { contact, gallery } = routes

const ServicesContact = (): JSX.Element => {

  return (
    <section
      className="w-full min-h-screen flex flex-col justify-center items-center gap-5"
      id="service-contact-section"
      aria-label="Service's page's contact section"
    >
      <h2
        className="text-3xl text-center text-white text-shadow"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Schedule A Photos Session
      </h2>
      <p
        className="w-10/12 text-xl text-center text-white text-shadow"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem laudantium nemo! Labore accusamus eum consequuntur suscipit. Assumenda, illum nostrum.
      </p>
      <div className="w-full flex justify-center items-center gap-3">
        <a
          href={contact}
          role="button"
          className="btn btn-outline text-white hover:text-black dark:hover:text-white text-shadow hover-shadowless"
          title="Click to schedule a photography session"
          aria-label="Click to schedule a photography session"
        >
          Schedule Session
        </a>
        <a
          href={gallery}
          role="button"
          className="btn btn-outline text-white hover:text-black dark:hover:text-white text-shadow hover-shadowless"
          title="Click to see my portfolio of works"
          aria-label="Click to see my portfolio of works"
        >
          See My Portfolio
        </a>
      </div>
    </section>
  )
}

export default ServicesContact