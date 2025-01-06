import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; 
import { Autoplay, Pagination } from "swiper/modules";
import { TESTIMONIAL_SLIDER } from "../utils/helper";

const TestimonialsSlider = () => {
    return (
        <div className="bg-off-black pb-28">
            <div className="container">
                <h2 className="text-center text-white lg:text-5xl text-3xl font-semibold pb-10">
                    Testimonials
                </h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            pagination: {
                                clickable: true,
                            },
                        },
                        768: {
                            slidesPerView: 2,
                            pagination: {
                                clickable: true,
                            },
                        },
                        1024: {
                            slidesPerView: 3,
                            pagination: false, 
                        },
                    }}
                    modules={[Autoplay, Pagination]} 
                    className="mySwiper"
                    pagination={{
                        clickable: true, 
                        dynamicBullets: true,
                    }}
                >
                    {TESTIMONIAL_SLIDER.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-custom-gradient p-6 pb-14 rounded-lg text-white shadow-lg">
                                <h3 className="text-2xl font-medium mb-4">
                                    {testimonial.title}
                                </h3>
                                <p className="text-sm font-normal lg:mb-12 mb-6 opacity-80">{testimonial.description}</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium">{testimonial.name}</p>
                                        <p className="text-sm font-normal">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialsSlider;
