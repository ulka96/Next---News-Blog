import React from 'react'

import HomeContainer from '@/container/homeContainer'
import { getLatestNews } from '@/api/service'

const HomePage = async() => {
 
  const latestNewsPromise = await getLatestNews()

  const [latestNews] = await Promise.all([latestNewsPromise])

 
  return (
        <HomeContainer latestNews={latestNews}/>
  )
}

export default HomePage
