import { useState, useRef } from 'react'
import { Filter } from 'components/Icons'
import useClickOutside from 'hooks/useClickOutside'

export default function Menu({ folders, selectedFolder, setSelectedFolder }) {
  const $menu = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useClickOutside($menu, () => setMenuOpen(false))

  console.log('Menu', folders); 

  const handleClick = folder => {
    setSelectedFolder(folder)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div ref={$menu}>
      <img
        src="arrow.png"
        alt="Filter by place here"
        className="invisible fixed bottom-24 right-8 h-[450px] ultrawide:visible"
      />

      <button
        className="fixed bottom-6 right-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-medium shadow-md transition hover:bg-medium/90 xl:h-16 xl:w-16"
        onClick={() => setMenuOpen(!menuOpen)}
        title="Filter by place"
      >
        <Filter className="w-9 text-white/50 transition hover:text-white/80 xl:w-10" />
      </button>

      <menu
        className={`fixed bottom-20 right-5 mb-5 flex w-48 flex-col gap-2 rounded-lg bg-medium p-5 shadow-md transition ${
          menuOpen ? 'visible' : 'invisible'
        }`}
      >
        
        <div
          className={`rounded-fullpx-3 z-10 cursor-pointer py-1 transition hover:text-white ${
            selectedFolder === 'art' ? 'text-details' : 'text-white/50'
          }`}
          onClick={() => handleClick('art')}
        >
          Art
        </div> 
        <div
          className={`rounded-fullpx-3 z-10 cursor-pointer py-1 transition hover:text-white ${
            selectedFolder === 'ayrtonsenna' ? 'text-details' : 'text-white/50'
          }`}
          onClick={() => handleClick('ayrtonsenna')}
        >
          Ayrton Senna
        </div> 
        <div
          className={`rounded-fullpx-3 z-10 cursor-pointer py-1 transition hover:text-white ${
            selectedFolder === 'carros' ? 'text-details' : 'text-white/50'
          }`}
          onClick={() => handleClick('carros')}
        >
          Cars
        </div> 
        <div
          className={`rounded-fullpx-3 z-10 cursor-pointer py-1 transition hover:text-white ${
            selectedFolder === 'comics' ? 'text-details' : 'text-white/50'
          }`}
          onClick={() => handleClick('comics')}
        >
          Comics
        </div>   
        <div className="h-[1px] border-t-0 bg-neutral-100/20 opacity-100" />

        <div
          className={`rounded-fullpx-3 z-10 cursor-pointer py-1 transition hover:text-white ${
            selectedFolder === 'All' ? 'text-details' : 'text-white/50'
          }`}
          onClick={() => handleClick('All')}
        >
          All photos
        </div>
      </menu>
    </div>
  )
}
