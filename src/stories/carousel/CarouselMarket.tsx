import './CarouselMarket.scss';
import { CarOutlined, DollarOutlined } from '@ant-design/icons';
import CarouselContent from '../carousel-content/CarouselContent';

const CarouselMarket = () => {
  return (
    <div className="carousel">
      <CarouselContent />
      <div className="carousel-content">
        <p className="carousel-content__title">
          5/73 Lake Street , Bayswater WA 6053
        </p>
        <p>Auction</p>
        <div className="carousel-content__state">
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
        <div className="carousel-content__value">
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

export default CarouselMarket;
