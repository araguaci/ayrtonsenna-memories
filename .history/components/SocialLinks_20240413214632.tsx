import { Instagram, Twitter, Camera, Computer, Facebook, Website, Senna } from 'components/Icons'

function SocialLinks() {
  return (
    <div className="mt-2 flex items-center justify-center gap-3">
      <a
        href="https://www.artesdosul.com/"
        target="_blank"
        className="font-semibold text-white/90 hover:text-white"
        rel="noreferrer"
      >
        <Senna />
      </a>
      <a
        href="https://www.artesdosul.com/"
        target="_blank"
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
