import routes from "../../routes/routes"
import { JSX } from "react"

const { contact } = routes

const AboutSection = (): JSX.Element => {
  return (
    <section
      className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center gap-5 px-5 py-10 over-hidden"
      aria-label="About the photographer section"
    >
      <figure
        className="about-section-profile-figure"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <img
          className="w-full rounded-2xl"
          src="/images/profile.webp"
          alt="Photographer profile picture"
          title="Photographer profile picture"
        />
      </figure>
      <article
        className="about-section-article"
        aria-labelledby="about-me-subtitle"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <h2 className="text-3xl mb-5" id="about-me-subtitle">
          About Me
        </h2>
        <p>
          Photography can be both literal and poetic. On one hand, it's a way to say, “I was here,” “This is me,” or “Be part of my world.” It's so common now that not knowing how to take a photo feels out of place. On the other hand, it's a tool of wonder—a box that captures light and lets you turn it into anything you imagine.
        </p>
        <p>
          When I raise my camera and meet my subject's gaze, the world fades into silence. From the first click to the final edit, I feel alive. Each photo is a creation, a small evolution in my journey as an artist. That feeling—that growth—is everything to me.
        </p>
        <p>
          Looking ahead, I hope to play a part—big or small—in the change our planet urgently needs. I hope the impact lasts decades. And I hope we don't just remember endangered species—we still have them.
        </p>
        <p>
          Right now, I love the thrill at the start of something new. I love strange ideas, bold flavors, the perfect playlist, and watching the wild shift with every change in light.
        </p>
        <p>
          If you're curious about my conservation work or how I support those causes, <a className="text-primary link" href={contact}>feel free to reach out</a>.
        </p>
      </article>
    </section>
  )
}

export default AboutSection