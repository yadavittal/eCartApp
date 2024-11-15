import React from 'react'
import { useContext } from 'react';
import { apple } from '../util/constents/contextapi';
import { addItem } from '../util/redux/slices/cartSlice';
import { useDispatch } from 'react-redux'


function Card({myData}) {
    const dispatch = useDispatch()

    // console.log(myData);
  const { dataName } = useContext(apple)
    
  return (
    <div className='card'>
                         <img src={myData.thumbnail} className='cardImg' alt="card-logo" />
                         <button className='btns' onClick={()=>{dispatch(addItem(myData))}}>Add+</button>
                         <p className='cardTitle'><span>Name:</span>{myData.title}</p>
                         <p className='cardPrice'><span>Price:</span>{myData.price}</p>
                         <p className='cardDesc'><span>Description:</span>A beautifull Car image</p>
                         <p> <span>User Name:</span>{dataName}</p>

    </div>
  )
}

// code to create HOC

export const withHederCard = (Card) => {
    return (props) => {
        return (
            <div>
                <h1 className='absolute oddCard bg-slate-900 text-slate-50'>Prime Card</h1>
                <Card  {...props} />
            </div>
        )
    }
}

export default Card
