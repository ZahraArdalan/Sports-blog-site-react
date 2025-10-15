import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";
import TrendingNews from "../components/TrendingNews";
import BannerSlider from "../components/BannerSlider";

import Article from "../components/Article";
import NewsLetter from "../components/NewsLetter";
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <TrendingNews />
      <BannerSlider />

      <Article />
      <NewsLetter />
    </div>
  );
};

export default Home;
