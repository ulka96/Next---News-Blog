import LatestNews from '@/components/home/latestNews'
import React from 'react'
import { ILatestNews } from '@/types/type';

interface IProps {
    latestNews: ILatestNews[];
  }

const LatestNewsContainer = ({latestNews}: IProps) => {
  return (
    <main>
      <LatestNews latestNews={latestNews}/>
    </main>
  )
}

export default LatestNewsContainer
