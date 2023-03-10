import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleSection from "../components/ArticleSection";
import TopPostssBar from "../components/TopPostssBar";
import RelatedArticlesBar from "../components/RelatedArticlesBar";
import ShareButtons from "../components/ShareButtons";
import axios from "axios";
import { useRouter } from "next/router";

const Post = () => {
  const [data, setData] = useState({});
  const router = useRouter();
  const { slug } = router.query;

  // from strapi
  useEffect(() => {
    axios
      .get("https://arcane-reaches-19838.herokuapp.com/api/articles")
      .then((res) => {
        const array = res.data.data;
        const found = array?.find((post) => post.attributes.Slug === slug);
        setData(found);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.query.slug, router.isReady]);





  return (
    <div className="w-full h-screen">
      <Header />

      <div className="h-screen w-full pt-[100px] font-blinker">
        <ShareButtons data={data?.attributes} slug={slug} />
<div className="grid gap-[200px]">
        <div className="flex justify-center w-full p-5 lg:p-20 lg:gap-10 gap-[5.5rem]">
          {/* article section */}
          <div className="w-[80%] lg:w-[75%] ">
            <ArticleSection data={data} />
          </div>

          <div className="lg:grid w-[25%] h-[70%] mx-3 hidden">
            <div className="border-4 lg:h-[100%] bg-white h-[750px]">
              <TopPostssBar />
            </div>

            <div className="w-full my-5 flex justify-center ">
              <div className="w-[300px] h-[600px] bg-cover bg-[url('https://images.unsplash.com/photo-1617419250411-98aa962b070f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=1240')]" />
            </div>
          </div>
        </div>

        <RelatedArticlesBar />
        <Footer/>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Post;
