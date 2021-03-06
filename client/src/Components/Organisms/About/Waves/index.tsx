/* eslint-disable jsx-a11y/alt-text */

import { VideoFrameStyle, TopWave1Style, TopWave2Style, TopWave3Style, TopWave4Style } from "./style";

const AboutWaves = () => {
  return (
    <>
      <img src="/asset/About/top_1.svg" className="about_wave" style={TopWave1Style} alt="topwave1" />
      <img src="/asset/About/top_2.svg" className="about_wave" style={TopWave2Style} alt="topwave2" />
      <img src="/asset/About/top_3.svg" className="about_wave" style={TopWave3Style} alt="topwave3" />
      <img src="/asset/About/top_4.svg" className="about_wave" style={TopWave4Style} alt="topwave4" />
      <img src="/asset/About/videoframe.svg" style={VideoFrameStyle} alt="videoframe" />
    </>
  );
};

export default AboutWaves;
