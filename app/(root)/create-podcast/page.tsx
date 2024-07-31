"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { z } from "zod"
import { cn } from "../../../lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Textarea } from "@/components/ui/textarea"
import GeneratePodcast from "../../../components/GeneratePodcast"
import GenerateThumbNail from "../../../components/GenerateThumbnail"
import { Loader } from "lucide-react"
import { Id } from "../../../convex/_generated/dataModel"
const voiceCategories = ['alloy', 'shimmer', 'nova', 'echo', 'fable', 'onyx'];

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const CreatePodcast = () => {
  const [imagePrompt, setimagePrompt] = useState('');
  const [imageStorageId, setimageStorageId] =
  useState<Id<"_storage"> | null>(null)
  const [imageUrl, setimageUrl] = useState('');
  
  const [audioUrl, setaudioUrl] = useState('');
  const [audioStorageId, setAudioStorageId] = 
  useState<Id<"_storage"> | null>(null)
  const [audioDuration, setaudioDuration] = useState(0);
 
  const [voiceType, setVoiceType] = 
  useState<string | null > (null);
  const [voicePrompt, setvoicePrompt] = useState('');

  const [isSubmitting, setIsSubmitting] = useState('');
 
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (

    <section className="mt-10 flex flex-col">
      <h1 className="text-20 font-bold text-white-1">Crea un podcast</h1>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 flex w-full flex-col">
        <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">
        <FormField
          control={form.control}
          name="podcastTitle"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2.5">
              <FormLabel className="text-16 font-bold text-white-1">Username</FormLabel>
              <FormControl>
                <Input className="input-class *:focus-visible:ring-orange-1"
                 placeholder="Podcastss" {...field} />
              </FormControl>
              <FormMessage className="text-white-1" />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-2.5">
          <Label className="text-16 font-bold text-white-1">
            Select Ai voice
          </Label>
          <Select onValueChange={(value) => setVoiceType(value)}>
            <SelectTrigger className={cn
              ('text-16 w-full border-none bg-black-1 text-gray-1')}>
              <SelectValue placeholder="Select AI Voice"
               className="placeholder:text-gray-1"/>
            </SelectTrigger>
            <SelectContent className="text-16 border-none
             bg-black-1 font-bold text-white-1 focus:ring-orange-1 ">
              {voiceCategories.map
              ((category) => (
                <SelectItem key={category} value={category}
                className="capitalize focus:bg-orange-1">
                  {category}
                </SelectItem>

              ))
              }
            </SelectContent>
            {voiceType && (
              <audio
              src={`/${voiceType}.mp3`}
              autoPlay
              className="hidden"
              />
            )}
          </Select>
        </div>
        
        <FormField
          control={form.control}
          name="podcastDescription"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2.5">
              <FormLabel className="text-16 font-bold text-white-1">Description</FormLabel>
              <FormControl>
                <Textarea className="input-class *:focus-visible:ring-orange-1"
                 placeholder="Escribe una breve descripcion del podcast" {...field} />
              </FormControl>
              <FormMessage className="text-white-1" />
            </FormItem>
          )}
        />
       </div>
       <div className="flex flex-col pt-10">
        <GeneratePodcast />
        
        <GenerateThumbNail/> 

        <div className="mt-10 w-full ">
          <Button type="submit"
          className="text-16 w-full bg-orange-1
          py-4 fint-extrabold text-white-1
          transition-all duration-500 hover:bg-black-1">
            {isSubmitting ? (
              <>
                Submitting
                <Loader size={20} className='animate-spin ml-2'/>
                
              </>
            ): (
              'Enviar y Publicar'
            )
          }
          </Button>
        </div>

       </div>
      </form>
    </Form>
     </section>
  )
}
export default CreatePodcast;