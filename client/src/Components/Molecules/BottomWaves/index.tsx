/* eslint-disable react/require-default-props */
import { LandingBottomWave1, LandingBottomWave2, LandingBottomWave3, LandingBottomWave4 } from "@Atoms/Svgs";
import { InlineStyleType } from "@Type/.";
import { Wave1Style, Wave2Style, Wave3Style, Wave4Style } from "./styles";

const BottomWaves = ({ style = {} }: { style?: InlineStyleType }) => {
  return (
    <div style={style}>
      <LandingBottomWave1 className="waves" style={Wave1Style} />
      <LandingBottomWave2 className="waves" style={Wave2Style} />
      <LandingBottomWave3 className="waves" style={Wave3Style} />
      <LandingBottomWave4 className="waves" style={Wave4Style} />
    </div>
  );
};

export default BottomWaves;
