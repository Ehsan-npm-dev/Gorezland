import React from 'react'
import { useNavigate } from 'react-router-dom'

function LearnItemMol({icon , number , title , url}) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(url)
  }
  
  
    return (
    <div onClick={handleClick}>
      <div className='flex justify-center items-center gap-2'>
        <img src={icon} alt="" />
        <span className='flex flex-col justify-center items-center'>
            <h2>{number}</h2>
            <h3 className='font-light text-sm'>{title}</h3>
        </span>
      </div>
    </div>
  )
}

export default LearnItemMol
