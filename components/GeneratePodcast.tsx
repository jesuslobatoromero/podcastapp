import { GeneratePodcastProps } from '../types'
import React, {useState} from 'react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
import { useAction, useMutation } from 'convex/react'
import { api } from '../convex/_generated/api'
import {v4 as uuidv4} from 'uuid';
import { useToast } from "@/components/ui/use-toast"


import { useUploadFiles } from '@xixixao/uploadstuff/react'

const useGeneratePodcast =({setAudio, voiceType, voicePrompt,setAudioStorageId}:GeneratePodcastProps) => {
const [isGenerating, setisGenerating] = useState(false);
const { toast } = useToast();
const generateUploadUrl = useMutation(api.files.generateUploadUrl)
const {startUpload} = useUploadFiles(generateUploadUrl);

const getPodcastAudio = useAction(api.openai.generateAudioAction)

const getAudioUrl = useMutation(api.podcasts.getUrl)


 const generatePodcast = async() => {
    setisGenerating(true);
    setAudio('');

    if(!voicePrompt){
      toast({
        title: "Please, provide a voiceType to generate a podcast",
      })
      return setisGenerating(false)
    }

    try{
     const response = await getPodcastAudio({
        voice:voiceType,
        input: voicePrompt
     })

     const blob = new Blob([response],{ type: 'type:audio/mpeg'});
     const fileName = `podcast-${uuidv4()}.mp3`
     const file = new File([blob], fileName, {type:'audio/mpeg'});
     
     const uploaded =  await startUpload([file]);
     const storageId = (uploaded[0].response as any).storageId;
    
     setAudioStorageId(storageId);

     const audioUrl = await getAudioUrl({storageId});
     setAudio(audioUrl!);
     setisGenerating(false)
     toast({
      title: "Podcast generated successfully",
    })
    }catch(error){
      console.log('Error generating podcast', error)
      toast({
        title: "Error generating podcast",
        variant: 'destructive',
      })
      setisGenerating(false);
    }
  }
  return {isGenerating, generatePodcast }
}

const GeneratePodcast = (props: GeneratePodcastProps) => {
  const {isGenerating, generatePodcast} = useGeneratePodcast
  (props);
  return (
    <div>
      <div className='flex flex-col gap-2.5'>
        <Label className='text-16 font-bold text-white-1'>
          AI Prompt to generate Podcast
        </Label>
        <Textarea className='input-class font-light
         focus-visible:ring-offset-orange-1'
        placeholder='Escribe texto para generar en audio'
        rows={5}
        value={props.voicePrompt}
        onChange={(e) => props.setVoicePrompt(e.target.value)}
        />
      </div>
      <div className='mt-5 w-full max-w-[200px]'>
      <Button type="submit"
      className="text-16 bg-orange-1
      py-4 font-bold text-white-1" onClick={generatePodcast}>
        {isGenerating ? (
          <>
            Generando
            <Loader size={20} className='animate-spin ml-2'/>
          </>
        ): (
          'Generar '
        )}
      </Button>
      </div>
    
    </div>
  )
}
export default GeneratePodcast