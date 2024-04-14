import { Instagram, Twitter, Camera, Computer, Facebook, Website, Suport } from 'components/Icons'

function SocialLinks() {
  return (
    <div className="mt-2 flex items-center justify-center gap-3">
      <a
        href="https://ayrtonsenna-inmemoriam.netlify.app/"
        target="_blank"
        aria-label="Carreira Ayrton Senna"
        alt="Carreira Ayrton Senna"
        className="font-semibold text-white/90 hover:text-white"
        rel="noreferrer"
      >
        <img src="./favicon.png" width="30" />
      </a>
      <a
        href="https://www.patreon.com/artesdosul/"
        target="_blank"
        aria-label="Support my work"
        className="font-semibold text-white/90 hover:text-white"
        rel="noreferrer"
      >
        <Computer />
      </a>
      <a
        href="https://www.artesdosul.com/"
        target="_blank"
        aria-label="My website"
        className="font-semibold text-white/90 hover:text-white"
        rel="noreferrer"
      >
        <Computer />
      </a>
      <a
        href="https://twitter.com/araguaci/"
        target="_blank"
        className="font-semibold text-white/90 hover:text-white"
        rel="noreferrer"
      >
        <Twitter />
      </a>
      <a
        href="https://www.instagram.com/araguaci.andrade/"
        target="_blank"
        className="font-semibold text-white/90 hover:text-white"
        rel="noreferrer"
      >
        <Instagram />
      </a>

      
    </div>
  )
}

export default SocialLinks
