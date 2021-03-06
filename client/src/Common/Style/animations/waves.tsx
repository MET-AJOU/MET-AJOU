const WaveAnimations = `
  .wave_down {
    margin-top: 21vh;
    transition:1s;
  }
  .wave_up_abs {
    margin-top:-30vh;
    transition:1s;
  }
  .wave_up{
    transition:1s;
  }
  & .waves {
    animation: bottom_waves 13s infinite;
    -webkit-animation: bottom_waves 13s infinite;
  }
@keyframes about_waves {
  from {
    
  }
  50% {
    width:101vw;
    margin-top : -4vh;
  }
  to {

  }
}

@-webkit-keyframes about_waves {
  from {
    
  }
  50% {
    margin-top : -20px;
  }
  to {

  }
}

@keyframes waves {
  from {
    height: 900px;
  }
  50% {
    height: 800px;
    margin-top: -100px;
  }
  to {
    height: 900px;
    margin-top: 0px;
  }
}

@-webkit-keyframes waves {
  from {
    height: 900px;
  }
  50% {
    height: 800px;
    margin-top: -100px;
  }
  to {
    height: 900px;
    margin-top: 0px;
  }
}

@keyframes bottom_waves {
  from{
    
  }
  50%{
    width:150vw;
    margin-top: -20px;
  }
  to{
    
  }
}

@-webkit-keyframes bottom_waves {
  from{

  }
  50%{
    width:150vw;
    margin-top: -20px;
  }
  to{
    
  }
}
`;

export default WaveAnimations;
