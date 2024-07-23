import React from 'react'
import Image from 'next/image'
const PodcastCard = ({imgUrl, title, 
  description, podcastId} : {
    imgUrl: string,
    title: string,
    description: string,
    podcastId: number,
  }) => {
  return (

    <div className='cursor-pointer'>
      <figure className='flex flex-col gap-2'>
        <Image
        src={imgUrl}
        width={174}
        height={174}
        alt={title}/> 
        <div className='flex flex-col'>
          <h1 className='text-white-1 text-16 truncate font-bold'>{title}</h1>
          <h2 className='text-white-1 text-12 font-normal capitalize'>{description}</h2>
        </div>

      </figure>
      Podcast Card
    </div>
  )
}

export default PodcastCard