import React from 'react'
import tick from '../assets/716225.jpg'
import untick from '../assets/images.jpg'
import delete_icon from '../assets/3405244.jpg'

const Todoitems = ({text, id, isComplete, deleteTodo, toggle, dueDate, createdAt, updateDueDate}) => {
    const handleDueDateChange = (date) => {
        updateDueDate(id, date);
    };
  
    return (
    <div onClick={()=> {toggle(id)}} className=' flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : untick} alt="" className='w-7'/>
            {/*<p className={'`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through": "" }'}>*/}
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
                
                {text}</p>

        </div>

        


        <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer' />


  

      </div>

  )
}

export default Todoitems
