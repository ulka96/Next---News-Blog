import SingleNews from '@/components/home/singleNews'
import { ILatestNews } from '@/types/type';
import React from 'react'

interface IProps {
    news: ILatestNews;
  }

const LatestDetailNewsContainer = ({news}:IProps) => {
  return (
    <div>
      <SingleNews news={news}/>
    </div>
  )
}

export default LatestDetailNewsContainer
