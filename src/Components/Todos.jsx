import React from 'react'
import { MdDelete } from 'react-icons/md'

const Todos = ({item,index,onhandleDelete}) => {
  return (
    <div key={index} className='px-4 flex items-center justify-between py-1 font-semibold bg-blue-200 rounded w-[20.5rem] shadow-md hover:bg-blue-300 transition-all duration-500 text-slate-600'>{item}
    <MdDelete className='text-xl  bg-transparent shadow-md cursor-pointer text-red-600' onClick={onhandleDelete}/>   
    </div>
  )
}

export default Todos