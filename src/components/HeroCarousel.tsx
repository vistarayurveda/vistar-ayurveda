"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import heroMain from "@/assets/hero-main.png";
import heroMainMobile from "@/assets/hero-main-mobile.jpg";
import Ingredient from "@/assets/Ingredient.png";
import IngredientMobile from "@/assets/Ingredient-mobile.png";
import BackLongjack from "@/assets/back.png"
import BackLongjackMobile from "@/assets/back-mobile.png"

const products = [
  {
    id: 1,
    name: "Longjack",
    image: heroMain,
    mobileImage: heroMainMobile,
  },
  {
    id: 2,
    name: "Ingredient",
    image: Ingredient,
    mobileImage:IngredientMobile
  },
  {
    id:3,
    name:"Back of Longjack",
    image:BackLongjack,
    mobileImage:BackLongjackMobile
  }
];

export default function HeroCarousel() {
  return (
    <section className="relative w-full h-auto pt-16 lg:pt-20">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {products.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <div className="relative w-full lg:min-h-screen flex items-center justify-center bg-black">
                <picture className="w-full flex items-center justify-center">
                  {product.mobileImage && (
                    <source
                      srcSet={product.mobileImage}
                      media="(max-width: 1024px)"
                    />
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full h-auto object-cover object-center lg:object-contain"
                  />
                </picture>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button className="hero-prev hidden lg:block absolute left-6 top-[40%] z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60">
        <ChevronLeft />
      </button>

      <button className="hero-next  hidden lg:block absolute right-6 top-[40%] z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60">
        <ChevronRight />
      </button>
    </section>
  );
}
