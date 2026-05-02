import { JSX } from "react"
import routes from "../routes/routes"
import { myInfo } from "../data/myInfo"
// React icons
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const { xtwitter, youtube, facebook } = myInfo
const { home, gallery, services, contact } = routes

const Footer = (): JSX.Element => {

  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover" href={`${services}#main-services`}>Main services</a>
        <a className="link link-hover" href={`${services}#events-service`}>Events</a>
        <a className="link link-hover" href={`${services}#fashion-service`}>Fashion</a>
        <a className="link link-hover" href={`${services}#landscapes-service`}>Landscapes</a>
        <a className="link link-hover" href={`${services}#lifestyle-service`}>Lifestyle</a>
      </nav>
      <nav>
        <h6 className="footer-title">
          <a className="" href={home}>Company</a>
        </h6>
        {/* <a className="link link-hover" href={about}>
          About us
        </a> */}
        <a className="link link-hover" href={gallery}>
          Gallery
        </a>
        <a className="link link-hover" href={services}>
          Services
        </a>
        <a className="link link-hover" href={contact}>
          Contact
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href={xtwitter} target="_blank">
            <FaXTwitter className="text-xl" />
          </a>
          <a href={youtube} target="_blank">
            <FaYoutube className="text-xl" />
          </a>
          <a href={facebook} target="_blank">
            <FaFacebookF className="text-xl" />
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer