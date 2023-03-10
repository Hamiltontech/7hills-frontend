import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryAds from './components/CategoryAds'
import QuizzesCards from "./components/QuizzesCards";
import axios from "axios";
import {useEffect, useState} from 'react'

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([])
useEffect(()=>{
  axios.get("https://arcane-reaches-19838.herokuapp.com/api/quizzes").then(res=>setQuizzes(res.data.data)).catch(err=>console.log(err))
}, [])


  return (
    <div className="w-full h-screen font-blinker">
      <Header />
      <div className="w-full h-full pt-[100px]">
        <h1 className="p-10 pb-1 text-3xl font-bold uppercase lg:text-5xl">
          Quizzes
        </h1>

        <hr className="mx-10" />
        <hr className="mx-10 text-yellow" />

        <div className="gap-5 p-10 lg:flex">
          <div className="lg:w-[80%] ">
            {/* <DiscountCards  data={data} /> */}
            <QuizzesCards quizzes={quizzes}/>
          </div>
          <div className="lg:w-[20%] h-full hidden lg:block">
            <CategoryAds />
          </div>
        </div>
        <Footer />
      </div>
      
    </div>
    
  );
};

export default Quizzes;
