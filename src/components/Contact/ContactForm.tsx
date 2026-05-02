import { JSX } from "react"

// React icons
import { FaUserAlt } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { GiBroom } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaPenAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";


const ContactForm = (): JSX.Element => {

  return (

    <section
      id="contact-form-wrapper"
      className="w-full min-h-screen flex flex-col justify-center items-center mb-5"
      aria-label="Contact form section"
    >
      <form id="contact-form" className="w-11/12 md:w-10/12 p-3 pb-6 md:p-5">
        <fieldset className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 border-base-300 rounded-box border p-4 mb-4">
          <legend
            className="fieldset-legend text-2xl px-2 mb-4 col-span-full text-white"
            data-aos="fade-down"
            data-aos-duration="1750"
          >
            Contact Me
          </legend>
          {/* Fullname */}
          <div className="form-div">
            <label className="floating-label" htmlFor="fullname-input">
              <span className="flex gap-2"><FaUserAlt /> Your fullname here</span>
              <input
                type="text"
                className="input input-md validator w-full"
                id="fullname-input"
                required
                placeholder="Your fullname here"
                pattern="[A-Za-z][A-Za-z]*"
                minLength={3}
                maxLength={70}
              />
              <div className="validator-hint mb-0">
                Must be 3 to 70 characters, containing only letters.
              </div>
            </label>
          </div>
          {/* Email */}
          <div className="form-div">
            <label className="floating-label" htmlFor="email-input">
              <span className="flex gap-2"><MdEmail /> Your email here</span>
              <input
                type="email"
                placeholder="Your email here"
                className="input input-md validator w-full"
                id="email-input"
                required
              />
              <div className="validator-hint">Enter valid email address.</div>
            </label>
          </div>
          {/* Subject */}
          <div className="form-div">
            <label className="floating-label" htmlFor="subject-input">
              <span className="flex gap-2"><FaPenAlt /> Your subject here</span>
              <input
                type="text"
                className="input input-md validator w-full"
                id="subject-input"
                required
                placeholder="Your subject here"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength={5}
                maxLength={50}
              />
              <div className="validator-hint mb-0">
                Must be 5 to 70 characters - Letters, numbers or dash.
              </div>
            </label>
          </div>
          {/* Phone */}
          <div className="form-div">
            <label className="floating-label" htmlFor="phone-input">
              <span className="flex gap-2"><FaPhoneVolume /> Your phone here</span>
              <input
                type="tel"
                className="input input-md validator tabular-nums w-full"
                id="phone-input"
                required
                placeholder="Your phone here" 
                pattern="[0-9]*"
                minLength={10}
                maxLength={10}
              />
              <div className="validator-hint">Must be 10 digits</div>
            </label>
          </div>
          <div className="form-div textarea-div col-span-full">
            <label htmlFor="message-input" className="floating-label textarea-label">
              <span className="flex gap-2"><MdMessage /> Your message here</span>
              <textarea
                className="textarea w-full h-24 validator"
                id="message-input"
                minLength={10}
                maxLength={10}
                required
                placeholder="Your message here"
              ></textarea>
              <div className="validator-hint mb-0">
                Must be 10 to 300 characters.
              </div>
            </label>
          </div>
        </fieldset>
        {/*---- Buttons ----*/}
        <section
          className="form-buttons-section w-full flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-5"
          aria-label="Contact form buttons section"
        >
          <button
            type="submit"
            className="btn btn-primary"
            title="Submit form with consultation request"
            aria-label="Submit form with consultation request"
          >
            <BiMailSend /> Submit
          </button>
          <button
            type="reset"
            className="btn btn-warning"
            title="Clear all form fields"
            aria-label="Clear all form fields"
          >
            <GiBroom /> Clear
          </button>
        </section>
      </form>
    </section>
  )
}

export default ContactForm