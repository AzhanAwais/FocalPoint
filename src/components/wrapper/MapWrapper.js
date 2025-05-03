'use client'

import dynamic from 'next/dynamic'
import React from 'react'
const Map = dynamic(() => import('../common/Map'), { ssr: false })

export default function MapWrapper() {
  return <Map />
}
