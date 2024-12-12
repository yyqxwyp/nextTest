import React from 'react'
import homesrc from '@/public/home.jpeg'
import HeroPage from '../components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home"
}

export default function Page() {
  return (
    <HeroPage imgUrl={homesrc} altText='首页' content='首页'/>
  )
}
