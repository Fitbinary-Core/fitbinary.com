"use client";

import { HeroSlider } from "./HeroSlider";

import { heroSlides } from "./hero-data";

export const Hero = () => {
  return <HeroSlider slides={heroSlides} />;
};
