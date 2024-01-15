import React from 'react'
import './Section.css'

type Props = {
  title: string
  children: typeof React.Children | React.ReactElement | string
}

export default function Section({ children, title }: Props) {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      {children}
    </>
  )
}
