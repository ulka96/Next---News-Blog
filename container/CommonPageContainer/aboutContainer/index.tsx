import About from '@/components/commonPageComponents/about'
import { ICommonPage } from '@/types/type'
import React from 'react'

interface IProps {
    aboutInfo: ICommonPage
  }

const AboutContainer = ({aboutInfo}:IProps) => {
  return (
    <main>
         <About aboutInfo={aboutInfo} />
    </main>
  )
}

export default AboutContainer
