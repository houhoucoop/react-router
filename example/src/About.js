import React from 'react'
import { useParams } from 'react-router'
import 'react-router/dist/index.css'

const About = () => {
  const { id } = useParams()

  return <>About {id}</>
}

export default About
