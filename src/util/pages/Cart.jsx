import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from '../redux/slices/cartSlice'

function Cart() {
  const dispatch = useDispatch()
  const selectedCartData = useSelector((store) => store.cart.items)
  return (
      <div className='w-[100%] flex items-center justify-center'>
          {selectedCartData.length > 0 ? (
              <div>
                  {selectedCartData.map((ele,ind) => {
                      return (
                          <div className='w-[100%] flex justify-between bg-indigo-300 p-2 rounded-lg m-2'>
                              <div>
                                  <p className='text-white'><span className='text-lg font-bold'>Name:</span> <span className='font-mono text-xl'>{ele.title}</span></p>
                                  <p className='text-white'><span className='text-lg font-bold'>Price:</span> <span className='font-mono text-xl'>{ele.price}</span>/-</p>
                                  <button onClick={()=>{dispatch(deleteItem(ele.id))}} className='m-2 p-2 bg-red-700 text-white rounded-lg'>Remove Item</button>
                              </div>
                              <div className='h-[70px] w-[70px]'>
                                  <img src={ele.thumbnail} alt="cart Image" />
                              </div>
                          </div>
                      )
                  })}
              </div>
          ) : (<h1 className='font-bold text-xl flex justify-center mt-10'>No Items are selected</h1>)}
      </div>
  )

}

export default Cart
