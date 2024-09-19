import React from 'react'
import Image from 'next/image'
import { ILatestNews } from '@/types/type'
import Link from 'next/link'

interface IProps {
    news: ILatestNews
  }

const SingleNews = ({news}:IProps) => {
  console.log(news,"news")
  return (
    <Link href={`/latestNews/${news.id}`}>
    <section className='flex flex-col items-start'>
        <div className='relative w-[250px] h-[250px]'>
        <Image src={news?.coverImage} alt='coverImage' fill={true} className='rounded-lg object-cover '></Image>
        </div>
   
        <p className='text-[20px] font-bold my-2'>{news?.title}</p>
        <h2 className='text-[18px] text-gray-600'>{news?.description}</h2>

    </section>
    </Link>
  )
}

export default SingleNews