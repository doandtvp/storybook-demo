import './Carousel.scss';
import { CarOutlined, DollarOutlined } from '@ant-design/icons';

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
        <div className="carosel-content__value">
          <div className="items">
            <i>
              <DollarOutlined />
            </i>
            <span className="item-name">Potential Cashflow:</span>
            <span className="item-value"> $12,000</span>
          </div>
          <div className="items">
            <i>
              <DollarOutlined />
            </i>
            <span className="item-name">Potential Value:</span>
            <span className="item-value"> $650,000</span>
          </div>
          <div className="items">
            <i>
              <DollarOutlined />
            </i>
            <span className="item-name">Potential Value:</span>
            <span className="item-value"> 9.2%</span>
          </div>
          <div className="items">
            <i>
              <DollarOutlined />
            </i>
            <span className="item-name">Potential Value:</span>
            <a href="#market" className="item-value__m">
              Baywater WA 6053
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
