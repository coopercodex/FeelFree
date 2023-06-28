import React from 'react'
import './featured.css'
import {RiKnifeBloodFill} from 'react-icons/ri'
import sampleImg from '../assets/cRdA9xjHBbobw4LJFsQ3j1CgpVq.jpg'

export const Featured = () => {
  return (
    <div className='featured-container'>
      <h1> <RiKnifeBloodFill className='knife-icon' /> Featured</h1>
      <img src={sampleImg} style={{height: 300, width: 450}} />
      <p>Can this be the end for Damien Leone's demonic clown?</p>
    </div>
  )
}
