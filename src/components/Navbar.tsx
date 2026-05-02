import routes from "../routes/routes"
import { myInfo } from "../data/myInfo";
import { JSX } from "react"
import { FaWhatsapp } from "react-icons/fa";


const { home, gallery, services, contact } = routes
const { whatsapp } = myInfo

const Navbar = (): JSX.Element => {

  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-64 p-2 shadow"
          >
            <li className="py-2">
              <a className="text-lg" href={home}>Home</a>
            </li>
            <li className="py-2">
              <a className="text-lg" href={gallery}>Gallery</a>
            </li>
            <li className="py-2">
              <a className="text-lg" href={services}>Services</a>
            </li>
            <li className="py-2">
              <a className="text-lg" href={contact}>Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href={home}>
          LOGO
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href={home}>Home</a>
          </li>
          <li>
            <a href={gallery}>Gallery</a>
          </li>
          <li>
            <a href={services}>Services</a>
          </li>
          <li>
            <a href={contact}>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-success text-xl text-white"
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via WhatsApp"
          title="Contact via WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  )
}

export default Navbar