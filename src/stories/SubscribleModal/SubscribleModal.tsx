import React from 'react';
import './SubscribleModal.scss';
import { CheckCircleOutlined } from '@ant-design/icons';
import SubmitButton from '../submit/SubmitButton';

function SubscribleModal() {
  return (
    <div className="subscrible-modal">
      <h1>Subscrible now to get access</h1>
      <div className="subscrible-modal__content">
        <p>
          Subscrible now to access all the great features that DIYBA offers and
          start building your property emprime!
        </p>
        <ul>
          <li>
            <CheckCircleOutlined className="content-icons" />
            <span>
              Lorem Ipsum is simply dummy text of the printing industry
            </span>
          </li>
          <li>
            <CheckCircleOutlined className="content-icons" />
            <span>
              Lorem Ipsum is simply dummy text of the printing industry
            </span>
          </li>
          <li>
            <CheckCircleOutlined className="content-icons" />
            <span>
              Lorem Ipsum is simply dummy text of the printing industry
            </span>
          </li>
        </ul>
      </div>
      <div className="subscrible-modal__button">
        <SubmitButton label="Subcribe Now" classType="submit" mw="315px" />
      </div>
    </div>
  );
}

export default SubscribleModal;
