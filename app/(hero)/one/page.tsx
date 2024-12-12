import React from 'react'
import HeroPage from '../../components/hero'
import onesrc from '@/public/one.jpeg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "One"
}
export default function OnePage() {
  return (
    <HeroPage imgUrl={onesrc} altText='第一' content='第一'/>

  )
}
