import SingleDetailsNews from '@/components/singleDetailsNews';
import { ILatestNews } from '@/types/type';
import React from 'react'

interface IProps {
    news: ILatestNews;
  }

const LatestDetailNewsContainer = ({news}:IProps) => {
  return (
    <div>
      <SingleDetailsNews news={news}/>
    </div>
  )
}

export default LatestDetailNewsContainer
