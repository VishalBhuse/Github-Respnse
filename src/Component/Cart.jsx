import React from 'react'

export const Cart = ({item}) => {
  return (
    <div className='flex'>
        <img src={item.avatar_url} alt={item.starred_ur} />
        <p>{item.login}</p>
    </div>
  )
}
