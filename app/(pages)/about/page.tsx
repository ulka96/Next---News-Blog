import { getCommonPage } from '@/api/service'
import AboutContainer from '@/container/CommonPageContainer/aboutContainer'
import React from 'react'


interface IParams {
  params: {id: string}
}


const AboutPage = async() => {


  const aboutPromise = await getCommonPage("1")

  const [aboutInfo] = await Promise.all([aboutPromise])

  return (
    
    <AboutContainer aboutInfo={aboutInfo}/>
  )
}

export default AboutPage