import React from "react";
import Image from "next/image";
import logo from "../../public/Images/art.png";


const DiscountCards = ({data}) => {

  return (
    
    <div className="grid lg:grid-cols-2 gap-1 font-blinker lg:gap-3 ">
      
      {data?.map((item, key)=>(
        <>
        <div key={key} className="duration-200 ease-in-out lg:p-5  flex bg-light/10 p-3">
        <div className="bg-cover h-[150px] w-[200px]" style={{"backgroundImage": `url("${item?.attributes?.ImageURL}")`,}}></div>
        <div className="ml-5 ">
          <h1 className="font-bold  lg:text-xl ">
            {item?.attributes?.Brand}
            <br></br>
            <span className="text-sm font-medium max-w-[300px] text-justify ">
              {item?.attributes?.Decsription}
            </span>
          </h1>
          <p className="font-extrabold text-sm">PROMO CODE <span className="font-light ml-2">{item?.attributes?.Promo}</span> </p>
        </div>
      </div>
        </>
      ))}
      

    </div>
    
  );
};

export default DiscountCards;
