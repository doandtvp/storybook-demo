import React from "react";
import { DollarOutlined } from "@ant-design/icons";
import "./Market.scss";
import au from "../../images/market/australia.jpg";

const Market = () => {
  return (
    <div className="market">
      <div className="market-images">
        <img src={au} alt="haha" />
      </div>
      <div className="market-content">
        <p className="market-content__title">Maroochydore QLD 4558</p>
        <div className="market-content__value">
          <div className="value-left">
            <div className="items">
              <i>
                <DollarOutlined />
              </i>
              <span className="item-name">Median price:</span>
              <span className="item-value"> $595,600</span>
            </div>

            <div className="items">
              <i>
                <DollarOutlined />
              </i>
              <span className="item-name">Vacany rate:</span>
              <span className="item-value"> 3.6%</span>
            </div>

            <div className="items">
              <i>
                <DollarOutlined />
              </i>
              <span className="item-name">Gross Yield:</span>
              <span className="item-value"> 6.7%</span>
            </div>

            <div className="items">
              <i>
                <DollarOutlined />
              </i>
              <span className="item-name">Demographic demand:</span>
              <span className="item-value"> 2 bed house</span>
            </div>
          </div>
          <div className="value-right">
            <div className="items">
              <i>
                <DollarOutlined />
              </i>
              <span className="item-name">Growth:</span>
              <span className="item-value"> 5.2% p/a</span>
            </div>

            <div className="items" id="bedroom">
              <i>
                <DollarOutlined />
              </i>
              <span className="item-name">
                Average number of bedrooms:
                <span className="item-value" id="bedroom-value">
                  {" "}
                  2.6
                </span>
              </span>
            </div>

            <div className="items">
              <i>
                <DollarOutlined />
              </i>
              <span className="item-name">Median rent:</span>
              <span className="item-value"> $300 p/w</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
