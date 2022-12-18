import React from "react";
import Image from "next/image";
import sky from "../../public/Images/placeholder.png";
import { useState, useEffect } from "react";
import axios from "axios";

const ArticleReactions = ({data}) => {
const id = data?.id?.toString()
const reaction = data?.Reaction



const handleClick = ()=>{
 const newReaction = reaction  + 1
 axios.put(`https://arcane-reaches-19838.herokuapp.com/api/articles/` + id, 
 {
   "data": {
     "Reactions": data?.attributes?.Reactions + 1,
   }
 })
}
  // const [unicorn, setUnicorn] = useState(0)
  // const [clap, setClap] = useState(0)
  // const [like, setLike] = useState(0)
  // const [love, setLove] = useState(0)
  // const [beer, setBeer] = useState(0)
  // const [happy, setHappy] = useState(0)
  // const [cheer, setCheer] = useState(0)


// console.log(reaction)
  return (
    <div className="mt-2  justify-between font-blinker">
      {/* author section */}
      <div>
        <div className="h-auto flex mt-5 ">
          <div className="ml-3 ">
            <div className="flex">
              <Image
                src={sky}
                className="rounded-full "
                height={50}
                alt="placeholder"
              />
              <h1 className="font-bold text-xs mt-5 ml-2">By Author Name</h1>
            </div>
            <p className="lg:max-w-[700px] text-xs max-w-full text-justify">
              Harry Guinness is a writer and photographer from Dublin, Ireland.
              His writing has appeared in the New York Times, Lifehacker, the
              Irish Examiner, and How-To Geek. His photos have been published on
              hundreds of sites—mostly without his permission.
            </p>
          </div>
        </div>

        <hr className="text-[#c0c0c0] my-5" />
     </div>
      <div className="lg:float-right">
        <div className="flex ">
          <div className="font-bold text-red pb-5 grid">
            <button className="hover:scale-105 p-1" onClick={handleClick}>
              <Image
                src="https://codedbychavez.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643772437%2FFYDU5k2kQ.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75"
                alt="/"
                width={30}
                height={30}
              />
            </button>
            {/* <p></p> */}
          </div>
 
          <div className="font-bold text-red pb-5 grid">
            <button className="hover:scale-105 p-1 "  onClick={handleClick}>
              <Image
                src="https://codedbychavez.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643783311%2FZ4fzAt9ln.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75"
                alt="/"
                width={30}
                height={30}
              />
            </button>
            {/* <p>{clap}</p> */}
          </div>

          <div className="font-bold text-red pb-5 grid">
            <button className="hover:scale-105 p-1 " onClick={handleClick}>
              <Image
                src="https://codedbychavez.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643688456%2FnznpsvvJs.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75"
                alt="/"
                width={30}
                height={30}
              />
            </button>
            {/* <p>{like}</p> */}
          </div>

          <div className="font-bold text-red pb-5 grid">
            <button className="hover:scale-105 p-1 " onClick={handleClick}>
              <Image
                src="https://codedbychavez.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643755644%2F40RNtU1Zj.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75"
                alt="/"
                width={30}
                height={30}
              />
            </button>
            {/* <p>{love}</p> */}
          </div>

          <div className="font-bold text-red pb-5 grid">
            <button className="hover:scale-105 p-1 " onClick={handleClick}>
              <Image
                src="https://codedbychavez.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643793473%2FwxrlC2BFn.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75"
                alt="/"
                width={30}
                height={30}
              />
            </button>
            {/* <p>{beer}</p> */}
          </div>

          <div className="font-bold text-red pb-5 grid">
            <button className="hover:scale-105 p-1 " onClick={handleClick}>
              <Image
                src="https://codedbychavez.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643814744%2F9iXxz71TL.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75"
                alt="/"
                width={30}
                height={30}
              />
            </button>
            {/* <p>{happy}</p> */}
          </div>

          <div className="font-bold text-red pb-5 grid">
            <button className="hover:scale-105 p-1 " onClick={handleClick}>
              <Image
                src="https://codedbychavez.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643839183%2FCvUptN73c.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75"
                alt="/"
                width={30}
                height={30}
              />
            </button>
            {/* <p>{cheer}</p> */}
          </div>
        </div> 

        {/* <button className='hover:scale-105 p-1'> <Image src="https://codedbychavez.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643854601%2FcP8rWFP9I.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75" alt='/' width={30} height={30}/></button> */}
      </div>
      
    </div>
  );
};

export default ArticleReactions;

