import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface BannerSlide {
  id: number;
  imageUrl: string;
  title: string;
  description?: string;
}

const Banner: React.FC = () => {
  const bannerSlides: BannerSlide[] = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'गाडी लोहार समाज उन्नती मंडळ',
      description: 'समाजाच्या विकासासाठी एकत्र',
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'आमच्या उपक्रमांबद्दल माहिती',
      description: 'समाजहित आणि सामाजिक उन्नती',
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'सभासद नोंदणी करा',
      description: 'आजच आमच्या समाजात सामील व्हा',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {bannerSlides.map((slide) => (
          <div key={slide.id} className="relative h-[60vh] md:h-[70vh]">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className="container-custom relative h-full flex flex-col justify-center items-center text-center text-white z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              {slide.description && (
                <p className="text-lg md:text-xl mb-6">{slide.description}</p>
              )}
              <button className="btn btn-secondary">अधिक माहिती</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;