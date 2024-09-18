import LatestNews from '@/components/home/latestNews'
import { ILatestNews } from '@/types/type'
import React from 'react'

interface IProps {
  latestNews: ILatestNews []
}

const HomeContainer = ({latestNews}: IProps) => {
  return (
    <main>
      <LatestNews latestNews={latestNews}/>
    </main>
  )
}

export default HomeContainer
