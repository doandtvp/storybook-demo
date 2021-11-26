import { Input } from 'antd';
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import Button from '../button/Button';

import './ResetPassword.scss';
const ResetPassword = () => {
  const isError = true;

  return (
    <div className="reset-password">
      <h3>Change Password</h3>
      <div
        className={
          isError ? 'reset-password__content errors' : 'reset-password__content'
        }
      >
        <label>Current password</label>
        <Input.Password
          prefix={isError ? <InfoCircleOutlined /> : null}
          className="reset-input"
          placeholder="Type here..."
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>

      <div
        className={
          isError ? 'reset-password__content errors' : 'reset-password__content'
        }
      >
        <label>New password</label>
        <Input.Password
          prefix={isError ? <InfoCircleOutlined /> : null}
          className="reset-input"
          placeholder="Type here..."
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>

      <div
        className={
          isError ? 'reset-password__content errors' : 'reset-password__content'
        }
      >
        <label>Confirm new password</label>
        <Input.Password
          prefix={isError ? <InfoCircleOutlined /> : null}
          className="reset-input"
          placeholder="Type here..."
          iconRender={(visible) =>
            visible ? (
              <EyeTwoTone style={{ fill: '#283977 !important' }} />
            ) : (
              <EyeInvisibleOutlined />
            )
          }
        />
      </div>

      {isError && (
        <div className="reset-errors">
          <div className="error-icons">
            <InfoCircleOutlined />
          </div>
          <div className="error-content">
            Error messgae goes here Error messgae goes here Error messgae goes
            here
          </div>
        </div>
      )}

      <div className="reset-buttons">
        <Button label="cancel" classType="btn-cancel" />
        <Button label="save" classType="btn-mas" />
      </div>
    </div>
  );
};

export default ResetPassword;
