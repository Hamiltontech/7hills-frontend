import React from "react";
import Link from "next/link";
import sky from "../../public/Images/sky2.png";
import { GiElectric } from "react-icons/gi";
import { useState, useEffect } from "react";
import axios from "axios";

const TopPostssBar = () => {
  const [top, setTop] = useState([]);

  useEffect(() => {
    axios
      .get("https://arcane-reaches-19838.herokuapp.com/api/articles")
      .then((response) => {
        setTop(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let data = top.filter((item) => item?.attributes?.TopStory === true);
  const ar = data.slice(Math.max(data.length - 5, 1))

  return (
    <div className="w-full  ">
      <h1 className="text-blackk lg:text-2xl font-bold -mt-5 ml-5 bg-white lg:w-[140px] w-[100px] text-center flex ">
        <span className="hidden lg:flex">
          <GiElectric size={30} />
        </span>
        Top Posts
      </h1>
      <div className="w-full h-full p-2">
        <div className="grid gap-2">
          <Link href={"/post/" + ar[0]?.attributes?.Slug}>
            <div className="flex justify-start gap-2 cursor-pointer hover:text-blackk/70">
              <img
                src={ar[0]?.attributes?.ImageURL}
                height={200}
                width={150}
              />
              <div>
                <h1 className="font-bold text-sm">
                  {ar[0]?.attributes?.Title}
                </h1>
                <p className="text-xs">{ar[0]?.attributes?.Abstract}</p>
              </div>
            </div>
          </Link>
          <hr />

          <Link href={"/post/" + ar[1]?.attributes?.Slug}>
            <div className="flex justify-start gap-2 cursor-pointer hover:text-blackk/70">
              <img
                src={ar[1]?.attributes?.ImageURL}
                height={200}
                width={150}
              />
              <div>
                <h1 className="font-bold text-sm">
                  {ar[1]?.attributes?.Title}
                </h1>
                <p className="text-xs">{ar[1]?.attributes?.Abstract}</p>
              </div>
            </div>
          </Link>

          <hr />

          <Link href={"/post/" + ar[2]?.attributes?.Slug}>
            <div className="flex justify-start gap-2 cursor-pointer hover:text-blackk/70">
              <img
                src={ar[2]?.attributes?.ImageURL}
                height={200}
                width={150}
              />
              <div>
                <h1 className="font-bold text-sm">
                  {ar[2]?.attributes?.Title}
                </h1>
                <p className="text-xs">{ar[2]?.attributes?.Abstract}</p>
              </div>
            </div>
          </Link>
          <hr />

          <Link href={"/post/" + ar[3]?.attributes?.Slug}>
            <div className="flex justify-start gap-2 cursor-pointer hover:text-blackk/70">
              <img
                src={ar[3]?.attributes?.ImageURL}
                height={200}
                width={150}
              />
              <div>
                <h1 className="font-bold text-sm">
                  {ar[3]?.attributes?.Title}
                </h1>
                <p className="text-xs">{ar[3]?.attributes?.Abstract}</p>
              </div>
            </div>
          </Link>
          <hr />

          <Link href={"/post/" + ar[4]?.attributes?.Slug}>
            <div className="flex justify-start gap-2 cursor-pointer hover:text-blackk/70">
              <img
                src={ar[4]?.attributes?.ImageURL}
                height={200}
                width={150}
              />
              <div>
                <h1 className="font-bold text-sm">
                  {ar[4]?.attributes?.Title}
                </h1>
                <p className="text-xs">{ar[4]?.attributes?.Abstract}</p>
              </div>
            </div>
          </Link>
        </div>

        {/* <div className="lg:flex p-2">
          <div
            className="bg-cover w-full h-full p-4"
            style={{
              backgroundImage: `url("${ar[0]?.attributes?.ImageURL}")`,
            }}
          />
          <h1 className="ml-1 font-bold duration-200 ease-in-out cursor-pointer lg:text-xl hover:text-blackk/60 text-xs">
            <Link href={"/post/" + data[0]?.attributes?.Slug}>
              {data[0]?.attributes?.Title}
            </Link>
            <br></br>
            <span className="text-sm font-medium max-w-[200px] hidden lg:flex">
              {data[0]?.attributes?.Abstract}
            </span>
          </h1>
        </div>
        <hr className="mx-5 text-[#c7c7c7]" />

        <div className="lg:flex p-2">
          <div
            className="bg-cover  w-full h-full p-4"
            style={{
              backgroundImage: `url("${data[1]?.attributes?.ImageURL}")`,
            }}
          />
          <h1 className="ml-1 font-bold duration-200 ease-in-out cursor-pointer lg:text-xl hover:text-blackk/60 text-xs">
            <Link href={"/post/" + data[1]?.attributes?.Slug}>
              {" "}
              {data[1]?.attributes?.Title}
            </Link>
            <br></br>
            <span className="text-sm font-medium max-w-[200px] hidden lg:flex">
              {data[1]?.attributes?.Abstract}
            </span>
          </h1>
        </div>
        <hr className="mx-5 text-[#c7c7c7]" />

        <div className="lg:flex p-2">
          <div
            className="bg-cover  w-full h-full p-4"
            style={{
              backgroundImage: `url("${data[2]?.attributes?.ImageURL}")`,
            }}
          />
          <h1 className="ml-1 font-bold duration-200 ease-in-out cursor-pointer lg:text-xl hover:text-blackk/60 text-xs">
            <Link href={"/post/" + data[2]?.attributes?.Slug}>
              {" "}
              {data[2]?.attributes?.Title}
            </Link>
            <br></br>
            <span className="text-sm font-medium max-w-[200px] hidden lg:flex">
              {data[2]?.attributes?.Abstract}
            </span>
          </h1>
        </div>
        <hr className="mx-5 text-[#c7c7c7]" />

        <div className="lg:flex p-2">
          <div
            className="bg-cover  w-full h-full p-4"
            style={{
              backgroundImage: `url("${data[3]?.attributes?.ImageURL}")`,
            }}
          />
          <h1 className="ml-1 font-bold duration-200 ease-in-out cursor-pointer lg:text-xl hover:text-blackk/60 text-xs">
            <Link href={"/post/" + data[3]?.attributes?.Slug}>
              {" "}
              {data[3]?.attributes?.Title}
            </Link>
            <br></br>
            <span className="text-sm font-medium max-w-[200px] hidden lg:flex">
              {data[3]?.attributes?.Abstract}
            </span>
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default TopPostssBar;
