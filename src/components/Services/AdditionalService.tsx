import { FunctionComponent } from "react"
import { IAdditionalService } from "../../interfaces/IAdditionalService"
import routes from "../../routes/routes"

const { contact } = routes

const AdditionalServices: FunctionComponent<IAdditionalService> = ({ id, name, img, alt, children, reversed }) => {

  return (
    <article
      className={`additional-service flex flex-col justify-center ${reversed ? "md:flex-row-reverse" : "md:flex-row"} overflow-hidden`}
      id={id}
    >
      <figure
        className="w-full md:w-[50%]"
        data-aos={`${reversed ? "flip-left" : "flip-right"}`}
        data-aos-duration="1500"
      >
        <img 
          className="w-full"
          src={img}
          alt={alt}
          title={alt}
        />
      </figure>
      <article
        className="additional-service-info w-full flex flex-col md:w-[50%] p-5 gap-3"
        data-aos={`${reversed ? "fade-right" : "fade-left"}`}
        data-aos-duration="1500"
      >
        <h2 className="card-title text-3xl mt-3">{name}</h2>
        <div className="divider mt-0"></div>
        {children}
        <a className="btn btn-outline mt-3 md:w-72" href={contact} title="Get a quote for this service">
          Get A Quote
        </a>
      </article>
    </article>
  )
}

export default AdditionalServices