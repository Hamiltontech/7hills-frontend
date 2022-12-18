import React from "react";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full bg-[#B0251C] h-50 text-white">
      <div className="w-full p-10  bg-red">
        <div className="lg:grid w-full lg:grid-cols-3 gap-5 flex justify-around">
          {/* about us */}
          <div>
            <Link href="/">
            <h1 className="p-2 text-xl font-bold uppercase">7HILLS.JO</h1></Link>
            <div className="px-2">
              <Link href="/About">
                <h1 className="text-white hover:text-yellow">About</h1>
              </Link>
              <Link href="/Contact">
                <h1 className="text-white hover:text-yellow">Contact</h1>
              </Link>
              <Link href="/About">
                <h1 className="text-white hover:text-yellow">Privacy Policy</h1>
              </Link>
            </div>
            <div className="flex mt-4 ">
              <Link target="_blank" href="https://www.instagram.com/7hillsjo/">
                <AiFillInstagram size={25} className="mx-2 hover:text-yellow" />
              </Link>
              <Link href="/">
                <AiFillTwitterCircle
                  size={25}
                  className="mx-2 hover:text-yellow"
                />
              </Link>
              {/* <Link href="/"><AiFillYoutube size={25} className="mx-2 hover:text-yellow" /></Link> */}
              <Link href="/">
                <IoLogoTiktok size={25} className="mx-2 hover:text-yellow" />
              </Link>
              <Link href="/">
                <AiFillFacebook size={25} className="mx-2 hover:text-yellow" />
              </Link>
              <Link href="/">
                <AiFillLinkedin size={25} className="mx-2 hover:text-yellow" />
              </Link>
            </div>
          </div>

          {/* featured */}
          <div>
            <h1 className="p-2 text-xl font-bold uppercase">Featured</h1>
            <div className="px-2">
              <Link href="/Discounts">
                <h1 className="text-white hover:text-yellow">Hot Deals</h1>
              </Link>

              <Link href="/Channel">
                <h1 className="text-white hover:text-yellow">Channel</h1>
              </Link>

              <Link href="/Quizzes">
                <h1 className="text-white hover:text-yellow">Quizzes</h1>
              </Link>
            </div>
          </div>

          {/* categories */}
          <div className="hidden lg:block">
            <h1 className="p-2 text-xl font-bold uppercase ">Categories</h1>
            <div className="hidden lg:grid grid-cols-3 gap-1 px-2 w-[400px]">
              <ul >
                <li  className="hover:text-yellow">
                  <Link href="/Art">Art</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Food">Food&Drinks</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Entertainment">Entertainment</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Lifestyle">Lifestyle</Link>
                </li>
              </ul>

              <ul>
                <li className="hover:text-yellow">
                  <Link href="/News">News</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Events">Events</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Movies">TV&Movies</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Travel">Travel</Link>
                </li>
              </ul>

              <ul>
                <li className="hover:text-yellow">
                  <Link href="/Shopping">Shopping</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Wellbeing">Wellbeing</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Technology">Technology</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Todo">Things To Do</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className='w-full h-full bg-blackk'>all rights reserved</div> */}
      </div>
      <h1 className="text-center lg:pt-3">All Rights Reserved ©</h1>
    </div>
  );
};

export default Footer;

