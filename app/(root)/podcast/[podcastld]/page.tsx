import React from 'react'

const PodcastDetails = ({params} : {params : {podcast : string }}) => {
  console.log(params); // Verifica el objeto completo params
  console.log(params.podcast); // Verifica el valor de podcastId
  return (
    <p className='text-white-1'>PodcastDetails for {params.podcast} </p>
  )
}

export default PodcastDetails

//no muestra el Id por pantalla 