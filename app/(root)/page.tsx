"use client";
//import { Button } from '@/components/ui/ui/button'//import React from 'react'
import { podcastData } from '../../constants'
import PodcastCard from '../../components/PodcastCard'
import { useQuery } from "convex/react";
import { api } from '../../convex/_generated/api';

function Home() {
  const tasks = useQuery(api.tasks.get);
  
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className='flex flex-col gap-5'>
      <h1 className='text-20 font-bold text-white-1'>HOME</h1> 

    <div className="flex min-h-screen flex-col items-center 
    justify-between p-24 text-white-1">
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
    </div>

    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2
     lg:grid-cols-3 2xl:grid-cols-4'>
      {podcastData.map(({id, title, 
      description, imgURL}) => (
        <PodcastCard
        key={id}
        imgUrl={imgURL}
        title={title}
        description={description}
        podcastId={id}
        
        />
      ))}
       </div> 
      
      </section>
      </div>
  )
}

export default Home