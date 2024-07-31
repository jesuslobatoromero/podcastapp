import React from 'react'

interface GeneratePodcastProps {
  setAudioStorageId:any
  setAudio:any
  voiceType:any
  audio:any
  voicePrompt:any
  setVoicePrompt:any
  setAudioDuration:any
}

const GeneratePodcast = ({
  setAudioStorageId,
  setAudio,
  voiceType,
  audio,
  voicePrompt,
  setVoicePrompt,
  setAudioDuration, 
}: GeneratePodcastProps ) => {
  return (
    <div>GeneratePodcast</div>
  )
}

export default GeneratePodcast