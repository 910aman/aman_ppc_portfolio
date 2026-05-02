import { FunctionComponent, ReactNode } from "react"

interface ContactInfoCardProps {
  icon: ReactNode;
  data: string;
  aosDuration: string;
}

const ContactInfoCard: FunctionComponent<ContactInfoCardProps> = ({ icon, data, aosDuration }) => {

  return (
    <div
      className="w-full sm:w-2/12 md:w-3/12 flex flex-col justify-center items-center gap-5"
      data-aos="fade-up"
      data-aos-duration={aosDuration}
    >
      <div className="text-2xl text-white">{icon}</div>
      <p className="text-center text-white">{data}</p>
    </div>
  )
}

export default ContactInfoCard