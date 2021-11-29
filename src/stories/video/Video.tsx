import './Video.scss';
import Button from '../button/Button';
import ReactPlayer from 'react-player/lazy';
import video from '../../video/test.mp4';

function Video() {
  return (
    <div className="video">
      <h1 className="video-title">Diyba-managed purchasing</h1>
      <p className="video-description">
        Take the hassle out of the property buying process and let Diyba take
        care of it for you
      </p>
      <div className="video-content">
        <ReactPlayer url={video} controls={true} className="intro-video" />
      </div>
      <div className="video-ask">
        <p>Want to go ahead?</p>
      </div>
      <div className="video-buttons">
        <Button label="cancel" classType="btn-cancel" />
        <Button label={`Yes, Let's do it!`} classType="btn-mas" />
      </div>
    </div>
  );
}

export default Video;
