import React from 'react'

import Image from 'next/image'
import { ILatestNews } from '@/types/type'
import Link from 'next/link'

interface IProps {
    news: ILatestNews
  }

const SingleDetailsNews = ({news}:IProps) => {
  return (
<Link href={`/latestNews/${news.id}`}>
    <section className='flex flex-col items-center mt-14'>
        <div className='relative w-[750px] h-[500px]'>
        <Image src={news?.cover_image} alt='coverImage' fill={true} className='rounded-lg object-cover '></Image>
        </div>
   
        <p className='text-[30px] font-bold my-6'>{news?.title}</p>
        <h2 className='text-[18px] text-gray-600 text-justify w-[750px]'>{news?.description}</h2>

    </section>
    </Link>
  )
}

export default SingleDetailsNews