import { getLatestNewsById } from '@/api/service'
import LatestDetailNewsContainer from '@/container/LatestDetailNewsContainer'


import React from 'react'

interface IParams {
  params: {id: string}
}

const LatestNewsDetailsPage = async({params}:IParams) => {

  const {id} = params;

  const newsPromise = await getLatestNewsById(id)

  const [news] = await Promise.all([newsPromise])
  

  return (
   <LatestDetailNewsContainer news={news}/>
  )
}

export default LatestNewsDetailsPage
