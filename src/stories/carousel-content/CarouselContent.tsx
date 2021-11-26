import { CarouselRef } from 'antd/lib/carousel';
import React from 'react';
import { Carousel } from 'antd';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import './CarouselContent.scss';

import img1 from '../../images/carousel/img1.jpg';
import img2 from '../../images/carousel/img2.jpg';
import img3 from '../../images/carousel/img3.jpg';
import img4 from '../../images/carousel/img4.jpg';

function CarouselContent(props: { type?: string }) {
  const { type } = props;

  const carouselRef: React.Ref<CarouselRef> = React.createRef();
  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div className={`carousel-images ${type ? 'property' : ''}`}>
      <Carousel ref={carouselRef} dots={false}>
        <div className="carousel-images__detail">
          <img src={img1} alt="img1" />
        </div>

        <div className="carousel-images__detail">
          <img src={img2} alt="img2" />
        </div>

        <div className="carousel-images__detail">
          <img src={img3} alt="img3" />
        </div>

        <div className="carousel-images__detail">
          <img src={img4} alt="img4" />
        </div>
      </Carousel>

      <div className="carousel-control" onClick={handlePrev}>
        <div className="control-prev">
          <ArrowLeftOutlined />
        </div>
        <div className="control-next" onClick={handleNext}>
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  );
}

export default CarouselContent;
