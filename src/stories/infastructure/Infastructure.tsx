import React from 'react';
import './Infastructure.scss';
import Tabs from '../tabs/Tabs';
import { BookOutlined } from '@ant-design/icons';

import { infastructureTabs } from './Infastructure.helper';

function Infastructure() {
  return (
    <div className="infastructure">
      <div className="infastructure-header">
        <Tabs lists={infastructureTabs} />
      </div>

      <div className="infastructure-content">
        <div className="infastructure-content__items">
          <div className="left-side">
            <i>
              <BookOutlined />
            </i>
            <p>Phase 3 Simpon Hwy extension</p>
          </div>

          <i>
            <BookOutlined />
          </i>
        </div>

        <div className="infastructure-content__items">
          <div className="left-side">
            <i>
              <BookOutlined />
            </i>
            <p>Phase 3 Simpon Hwy extension</p>
          </div>

          <i>
            <BookOutlined />
          </i>
        </div>

        <div className="infastructure-content__items">
          <div className="left-side">
            <i>
              <BookOutlined />
            </i>
            <p>Phase 3 Simpon Hwy extension</p>
          </div>

          <i>
            <BookOutlined />
          </i>
        </div>

        <div className="infastructure-content__items">
          <div className="left-side">
            <i>
              <BookOutlined />
            </i>
            <p>Phase 3 Simpon Hwy extension</p>
          </div>

          <i>
            <BookOutlined />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Infastructure;
