import React from 'react'

function Card({myData}) {
    // console.log(myData);
    
  return (
    <div className='card'>
                         <img src={myData.thumbnail} className='cardImg' alt="card-logo" />
                         <p className='cardTitle'><span>Name:</span>{myData.title}</p>
                         <p className='cardPrice'><span>Price:</span>{myData.price}</p>
                         <p className='cardDesc'><span>Description:</span>A beautifull Car image</p>
    </div>
  )
}
export default Card
