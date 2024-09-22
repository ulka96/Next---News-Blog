
import React from 'react'
import { ILatestNews } from '@/types/type';
import AllLatestNews from '@/components/home/allLatestNews';

interface IProps {
    latestNews: ILatestNews[];
  }

const AllLatestNewsContainer = ({latestNews}: IProps) => {
  return (
    <main>
      <AllLatestNews latestNews={latestNews}/>
    </main>
  )
}

export default AllLatestNewsContainer