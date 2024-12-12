import React from 'react'
import HeroPage from '../../components/hero'
import twosrc from '@/public/two.jpeg'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Two"
}
export default function TwoPage() {
  return (
    <HeroPage imgUrl={twosrc} altText='第二' content='我是更改之后的' />

  )
}
