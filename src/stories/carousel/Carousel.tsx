import './Carousel.scss';
import { CarOutlined } from '@ant-design/icons';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carosel-images"></div>
      <div className="carosel-content">
        <p className="carosel-content__title">
          5/73 Lake Street , Bayswater WA 6053
        </p>
        <p>Auction</p>
        <div className="carosel-content__state">
          <div>
            <span>
              <i>
                <CarOutlined />
              </i>
              4
            </span>
          </div>

          <div>
            <span>
              <i>
                <CarOutlined />
              </i>
              4
            </span>
          </div>

          <div>
            <span>
              <i>
                <CarOutlined />
              </i>
              4
            </span>
          </div>

          <div>
            <span>
              <i>
                <CarOutlined />
              </i>
              4
            </span>
          </div>
        </div>
        <div className="carosel-content__value"></div>
      </div>
    </div>
  );
};

export default Carousel;
