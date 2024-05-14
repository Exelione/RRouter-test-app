import React from 'react'
import { Link } from 'react-router-dom'


export const CustomButton = ({children, to}) => {
  return (
    <button className='CustomButton'><Link to={to}>{children}</Link></button>
  )
}
