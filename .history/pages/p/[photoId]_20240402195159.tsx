import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Carousel from '../../components/Carousel'
import getResults from '../../utils/cachedImages'
import cloudinary from '../../utils/cloudinary'
import { CldOgImage } from 'next-cloudinary'
import getBase64ImageUrl from '../../utils/generateBlurPlaceholder'
import type { ImageProps } from '../../utils/types'

const Home: NextPage = ({ currentPhoto }: { currentPhoto: ImageProps }) => {
  const router = useRouter()
  const { photoId } = router.query
  let index = Number(photoId)

  return (
    <>
      <Head>
        <title>In Memoriam Ayrton Senna</title>
      </Head>
      <CldOgImage src={currentPhoto.public_id} alt="In Memoriam Ayrton Senna" />

      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={index} />
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async context => {
  const results = await getResults()

  let reducedResults: ImageProps[] = []
  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      aspect_ratio: result.aspect_ratio,
      public_id: result.public_id,
      format: result.format
    })
    i++
  }

  const currentPhoto = reducedResults.find(
    img => img.id === Number(context.params.photoId)
  )
  currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto)

  return {
    props: {
      currentPhoto: currentPhoto
    }
  }
}

export async function getStaticPaths() {
  const results = await cloudinary.v2.search
    .sort_by('folder', 'desc')
    .max_results(2000)
    .execute()

  if (results?.next_cursor) {
    const moreResults = await cloudinary.v2.search
      .sort_by('folder', 'desc')
      .next_cursor(results?.next_cursor)
      .max_results(2000)
      .execute()

    results.resources = results.resources.concat(moreResults.resources)
  }

  let fullPaths = []
  for (let i = 0; i < results.resources.length; i++) {
    fullPaths.push({ params: { photoId: i.toString() } })
  }

  return {
    paths: fullPaths,
    fallback: false
  }
}
