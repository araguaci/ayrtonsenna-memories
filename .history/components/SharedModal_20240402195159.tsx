import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { CldImage } from 'next-cloudinary'
import { useSwipeable } from 'react-swipeable'
import { variants } from 'utils/animationVariants'

import type { SharedModalProps } from 'utils/types'
import UserActions from './UserActions'
import ModalNavigation from './ModalNavigation'
import ModalBack from './ModalBack'

export default function SharedModal({
  index,
  images,
  changePhotoId,
  closeModal,
  navigation,
  currentPhoto,
  direction
}: SharedModalProps) {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images?.length - 1) {
        changePhotoId(index + 1)
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1)
      }
    },
    trackMouse: true
  })

  let currentImage = images ? images[index] : currentPhoto

  return (
    <MotionConfig
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }}
    >
      <div
        className="relative flex w-full max-w-7xl items-center wide:h-full xl:taller-than-854:h-auto"
        style={{ aspectRatio: currentImage.aspect_ratio }}
        {...handlers}
      >
        {/* Main image */}
        <div className="w-full overflow-hidden">
          <div
            className="relative m-auto flex max-h-[90vh] items-center justify-center"
            style={{ aspectRatio: currentImage.aspect_ratio }}
          >
            <div
              className="relative z-50 max-h-full w-full"
              style={{ aspectRatio: currentImage.aspect_ratio }}
            >
              {navigation && (
                <ModalNavigation
                  images={images}
                  index={index}
                  changePhotoId={changePhotoId}
                />
              )}

              <UserActions currentImage={currentImage} index={index} />

              <ModalBack navigation={navigation} closeModal={closeModal} />
            </div>

            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute z-40"
              >
                <CldImage
                  src={currentImage.public_id}
                  placeholder="blur"
                  blurDataURL={currentImage.blurDataUrl}
                  width={currentImage.width > currentImage.height ? 1280 : 853}
                  height={currentImage.height > currentImage.width ? 1280 : 853}
                  format="webp"
                  priority
                  alt="In Memoriam Ayrton Senna"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  )
}
