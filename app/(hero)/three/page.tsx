import React from 'react'
import HeroPage from '../../components/hero'
import threesrc from '@/public/three.jpeg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Three"
}
export default function ThewwPage() {
  return (
    <HeroPage imgUrl={threesrc} altText='第三' content='第三'/>

  )
}
