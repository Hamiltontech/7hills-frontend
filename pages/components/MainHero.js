import React from "react";
import Link from "next/link";

const MainHero = ({ data }) => {
  let arr = data?.filter((ele) => ele?.attributes?.Featured === true)  || [
    {attributes: "", Title:"", Abstract:"", Slug:""},
    {attributes: "", Title:"", Abstract:"", Slug:""},
    {attributes: "", Title:"", Abstract:"", Slug:""},
  ]
  const ar = arr?.slice(Math.max(arr?.length - 3, 1)) || [
    {attributes: "", Title:"", Abstract:"", Slug:""},
    {attributes: "", Title:"", Abstract:"", Slug:""},
    {attributes: "", Title:"", Abstract:"", Slug:""},
  ]

  return (
    <div className="w-full pt-[100px] font-blinker">
      <div className=" lg:h-[650px] w-full flex justify-between h-[600px]">
        <div
          className="bg-cover lg:w-[65%] w-[50%]"
          style={{ backgroundImage: `url("${ar[0]?.attributes?.ImageURL}")`}}
        >
          <div className="h-full text-white duration-200 ease-in-out cursor-pointer bg-blackk/60 hover:bg-blackk/80 text-left px-10 ">
            <div className="">
            <h1 className="pt-10 text-3xl font-extrabold text-center lg:pt-40 lg:mx-10 md:text-6xl lg:text-7xl lg:text-left fle ">
              {ar[0]?.attributes?.Title}
            </h1>
            <p className="max-w-[600px] lg:ml-10 ml-1 hidden lg:block lg:text-xl">
              {ar[0]?.attributes?.Abstract}
            </p>
            <Link href={"/post/" + ar[0]?.attributes?.Slug}>
              <h1 className="p-4 mt-2 lg:ml-10 border hover:bg-white/10 hover:text-yellow w-[130px]">
                VIEW ARTICLE
              </h1>
            </Link>
            </div>
          </div>
        </div>

        <div className="bg-dark lg:w-[35%] text-white w-[50%]">
          <div
            className="h-[50%] bg-cover"
            style={{ backgroundImage: `url("${ar[1]?.attributes?.ImageURL}")` }}
          >
            <Link href={"/post/" + ar[1]?.attributes?.Slug}>
            <div className="w-full h-full text-white duration-200 ease-in-out cursor-pointer bg-blackk/70 hover:bg-blackk/80">
              <h1 className="pt-5 text-center lg:text-left mx-10 text-lg font-extrabold lg:pt-20 lg:text-2xl p-1">
                {ar[1]?.attributes?.Title}
              </h1>
              <p className="hidden max-w-[500px] ml-10 lg:flex text-sm">
                {ar[1]?.attributes?.Abstract}
              </p>
            </div>
            </Link>
          </div>

          <div
            className="h-[50%] bg-cover flex"
            style={{ backgroundImage: `url("${ar[2]?.attributes?.ImageURL}")` }}
          >
            <Link href={"/post/" + ar[2]?.attributes?.Slug}>
            <div className="w-full h-full text-white duration-200 ease-in-out cursor-pointer bg-blackk/70 hover:bg-blackk/80 ">
              <h1 className="pt-5 text-center lg:text-left mx-10 text-lg font-extrabold lg:pt-20 lg:text-2xl p-1">
                {ar[2]?.attributes?.Title}
              </h1>
              <p className="hidden max-w-[500px] ml-10 lg:flex text-sm">
                {ar[2]?.attributes?.Abstract}
              </p>

            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
