import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import './Pagination.css'
const Pagination = ( {page , setPage} ) => {
    const handleClickLeft = ()=>{
        if(page > 1 )setPage(page - 1)
      }
      const handleClickRight = ()=>{
        setPage(page + 1)
      }
  return (
    <div className='pagination'>
        <div className="pagination__btn ">
            <AiOutlineArrowLeft className='pagination__main ' onClick={handleClickLeft}/>
        </div>
        <h2 className="pagination__page font-bold text-white ">{page}</h2>
        <div className="pagination__btn">
            <AiOutlineArrowRight className='pagination__main '  onClick={handleClickRight}/>
        </div>

    </div>
  )
}

export {Pagination}