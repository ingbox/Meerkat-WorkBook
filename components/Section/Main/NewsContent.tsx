import React from 'react'
import Image from 'next/image'

interface Props {
  defaultImage: string, name: string
}

function NewsContent({defaultImage, name}: Props) {
  return (
        <Image
          src= {defaultImage}
          alt= {name}
          layout = 'fill'
        />
  )
}

export default NewsContent