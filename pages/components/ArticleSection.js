import React from 'react';
import Comment from './Comment';
import { GoPrimitiveDot } from "react-icons/go";
import ArticleReactions from "./ArticleReactions";
import ShareButtons from "./ShareButtons";
import RelatedArticlesBar from './RelatedArticlesBar'

const ArticleSection = ({data}) => {

  return (
    <div className="">

      <div></div>
      {/* category and date */}
      <div className="flex text-xs font-blinker lg:text-sm">
        <p className="flex font-bold uppercase text-red ">
        {data?.attributes?.Category}
          <span className="mt-1 mx-1">
            <GoPrimitiveDot />
          </span>
        </p>
        <p>{data?.attributes?.createdAt.slice(0,10)}</p>
      </div>

      {/* title */}
      <h1 className="text-2xl font-bold lg:text-5xl ">{data?.attributes?.Title}</h1>

      {/* Abstract */}
      <p className="lg:max-w-[900px] max-w-[300px] text-justify lg:text-lg text-sm py-3">
       {data?.attributes?.Abstract}
      </p>

      {/* cover image */}
      <div className='lg:w-[100%] w-[100%] h-60 lg:h-[500px] bg-cover' style={{ backgroundImage: `url("${data?.attributes?.ImageURL}")`}}></div>
      
      {/* content */}
      <div className="py-2 lg:py-5">
        <p className="lg:max-w-[1400px] text-justify text-sm lg:text-lg max-w-[300px]">
    
         {data?.attributes?.Body}
         {/* <div className="lg:hidden">
         <ShareButtons />
         </div> */}
        </p>
      </div>
      <hr className="text-[#c0c0c0]" />
      
  {/* <ArticleReactions data={data}/> */}

  <div >
<Comment />
  </div>

    </div>
  );
};

export default ArticleSection;