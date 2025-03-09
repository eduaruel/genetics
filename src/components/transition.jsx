import React from 'react';
import { Carousel } from 'react-bootstrap';


const Transition = () => {
  // Array con las rutas de tus imágenes
  const carouselItems = [
    {
      image: "/src/assets/slide-a200.jpg"
    },
    {
      image: "/src/assets/slide-color.jpg"
    },
    {
      image:"/src/assets/slide-neobona.jpg"
    },
    {
      image:"/src/assets/slide-nutri.jpg"
    },
    {
      image:"/src/assets/slide-precongen.jpg"
    },
    {
      image:"/src/assets/slide-prosigna.jpg"
    }
  ];

  return (
    <Carousel fade indicators={false}>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index} interval={5000} className='custom-carousel-height ' >
          <img
            className="d-block img-fluid w-100"
            src={item.image}
          />  
        
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default Transition;