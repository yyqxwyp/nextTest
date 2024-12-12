import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface PropsType {
    imgUrl: StaticImageData;
    altText: string
    content: string
}
export default function HeroPage(props: PropsType) {
    return (
        <div className=' h-screen relative text-white'>
            <div className='absolute inset-0 -z-10'>
                <Image src={props.imgUrl} alt={props.altText} fill style={{ objectFit: 'cover' }} />
                <div className='absolute inset-0 bg-gradient-to-r from-gray-900'></div>
            </div>
            <div className='flex justify-center align-middle pt-48'>
                <h1 className='text-6xl'>{props.content}</h1>
            </div>
        </div>
    )
}
