import { JSX } from "react"
import ContactInfoCard from "./ContactInfoCard"
import GoogleMapLocation from "./GoogleMapLocation";
import { myInfo } from "../../data/myInfo"
// React icons
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { BsEnvelopeAtFill } from "react-icons/bs";

const { address, phone, email, xtwitterUser } = myInfo

const ContactInfo = (): JSX.Element => {
  return (
    <section
      id="contact-info-section"
      className="w-11/12 md:w-10/12 p-3 md:p-10 flex flex-col gap-5 mb-10 overflow-hidden"
      aria-labelledby="contact-info-title"
    >
      <h2
        className="text-2xl font-bold text-white"
        id="contact-info-title"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Get In Touch With Me
      </h2>
      <p
        className="text-xl text-white"
        data-aos="fade-left"
        data-aos-duration="1750"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum debitis illo dolore vero. Consequuntur amet autem dolores voluptatibus minima commodi ullam eligendi rem aliquid rerum iusto, repellat blanditiis cumque voluptas.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        <ContactInfoCard
          icon={<FaMapLocationDot />}
          data={address}
          aosDuration="1500"
        />
        <ContactInfoCard
          icon={<MdOutlinePhoneAndroid />}
          data={phone}
          aosDuration="2000"
        />
        <ContactInfoCard
          icon={<FaXTwitter />}
          data={xtwitterUser}
          aosDuration="2500"
        />
        <ContactInfoCard
          icon={<BsEnvelopeAtFill />}
          data={email}
          aosDuration="3000"
        />
      </div>
      <GoogleMapLocation />
    </section>
  )
}

export default ContactInfo