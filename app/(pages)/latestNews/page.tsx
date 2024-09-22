
import { getLatestNews } from '@/api/service'
import AllLatestNewsContainer from '@/container/allLatestNewsContainer'

import React from 'react'



const LatestNewsPage = async() => {  

  const latestNewsPromise = await getLatestNews()

  const [latestNews] = await Promise.all([latestNewsPromise])

  return (
   <AllLatestNewsContainer latestNews={latestNews}/>
  )
}

export default LatestNewsPage
