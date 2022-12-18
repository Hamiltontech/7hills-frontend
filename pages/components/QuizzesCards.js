import React from 'react'
import Link from 'next/link'

const QuizzesCards = ({quizzes}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-1 font-blinker lg:gap-3 ">
      
    {quizzes?.map((item, key)=>(
      <>

      <Link href={item?.attributes?.URL}>
      <div key={key} className="duration-200 ease-in-out lg:p-5  flex bg-light/10 p-3 hover:bg-light/20">
      <div className="bg-cover h-[150px] w-[200px]" style={{"backgroundImage": `url("${item?.attributes?.Image}")`,}}></div>
      <div className="ml-5 ">
        <h1 className="font-bold  lg:text-xl ">
          {item?.attributes?.Name}
          <br></br>
          <span className="text-sm font-medium max-w-[300px] text-justify ">
            {item?.attributes?.Decsription}
          </span>
        </h1>
      </div>
    </div>
    </Link>
      </>
    ))}
    

  </div>
  )
}

export default QuizzesCards
