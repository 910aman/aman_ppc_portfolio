import { JSX } from "react"

const GoogleMapLocation = (): JSX.Element => {
  return (
    <section
      id="google-map-wrapper"
      aria-label="Location on Google Maps"
      className="w-full py-4 flex justify-center"
    >
      <div className="w-full max-w-6xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Google Map showing location in..."
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13268.081468727249!2d-84.39893880749905!3d33.760139552551536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20Georgia%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1745281810351!5m2!1ses!2sar"
          className="w-full h-full"
          style={{border: "0"}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default GoogleMapLocation