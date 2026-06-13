import React from 'react'

const Card = (props) => {
  return (
    <div>
     <a href={props.elem.url} target='_blank'>
      <div className='h-40 w-44 bg-white overflow-hidden rounded-xl'>
        <img className='h-full object-cover' src={props.elem.download_url} alt=''/>
      </div>
      <h2 className='font-bold-lg'>{props.elem.author}</h2>
      </a>
    </div>
  )
}

export default Card