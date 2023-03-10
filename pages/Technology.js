import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

const Technology = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://arcane-reaches-19838.herokuapp.com/api/articles")
      .then((response) => {
        let arr = response.data.data.filter(
          (ele) => ele.attributes.Category === "technology"
        );
        setData([...arr]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="w-full h-screen font-blinker ">
    <Header />
    <div className="w-full pt-[100px] font-blinker ">
    <div className=" h-[500px] w-full flex justify-between">
      <div className='lg:bg-fixed bg-cover bg-[url("https://images.unsplash.com/photo-1617419250411-98aa962b070f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=1240")] lg:w-full w-full'>
        <div className="h-full text-white bg-blackk/60 ">
          <h1 className="pt-40 text-5xl font-extrabold text-center lg:pt-20 lg:ml-10 md:text-6xl lg:text-9xl lg:text-left">
            Travel
          </h1>
          <p className=" lg:ml-10 text-center lg:text-left lg:max-w-[500px]">
            Decription about this category
          </p>
          {/* <button className="p-4 mt-2 ml-10 border hover:bg-white/10 hover:text-yellow ">VIEW ARTICLE</button> */}
        </div>
      </div>
    </div>
  </div>

  
    <div className="w-full h-full">
    <h1 className="p-10 pb-1 text-3xl font-bold uppercase lg:text-5xl">
      Latest Articles
    </h1>
    <hr className="mx-10" />
    <hr className="mx-10 text-yellow " />

      <div className="grid gap-1 justify-center align-middle p-10 lg:grid-cols-5">
        {/* cards  */}
        {data.map((item, key) => (
          <>
           <Link href={"/post/" + item?.attributes?.Slug}>
           <div className="h-full py-16 lg:mb-[200px]  hover:text-blackk/50 ease-in-out duration-200" key={key}>
              <div
                className="w-full h-full bg-cover"
                style={{
                  backgroundImage: `url("${item?.attributes?.ImageURL}")`,
                }}
              ></div>
             
                <h2 className="px-1 lg:text-xl font-bold ">
                  {item?.attributes?.Title}
                </h2>
             
              <p className="px-1 text-xs lg:text-sm">
                {item?.attributes?.Abstract}
              </p>
              <h1 className="p-1 text-xs uppercase  text-red">
                {item?.attributes?.createdAt?.slice(0, 10)}
              </h1>
            </div>
            </Link>
          </>
        ))}
      </div>
      {/* <Footer /> */}
      
    </div>
 
  </div>
  );
};

export default Technology;
