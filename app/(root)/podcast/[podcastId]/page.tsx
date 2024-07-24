'use client'

import React from 'react'

const PodcastDetails = ({params} : {params : {podcastId : string }}) => {
  console.log(params); // Verifica el objeto completo params
  console.log(params.podcastId); // Verifica el valor de podcastId
  return (
    <p className='text-white-1'>PodcastDetails for {params.podcastId} </p>
  )
}

export default PodcastDetails

//no muestra el Id por pantalla 