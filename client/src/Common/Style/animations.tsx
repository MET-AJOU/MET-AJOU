export const animationStyles = `

.slide_up {
  position: relative;
  top: 0px;
  opacity: 1;
  transition: 1s;
}

.slide_up_opacity {
  position: relative;
  top: 0px;
  opacity: 0.3;
  transition: 1s;
}

.slide_down {
  position: absolute;
  top: 200px;
  opacity: 0;
}

.hide_up {
  position:relative;
  top:-200px;
  opacity:0;
}

@keyframes rotate_45 {
    from{

    }
    33%{
      transform : rotate3d(0,0,1,20deg);
    }
    66% {
      transform :rotate3d(0,0,1,-20deg);
    }
    to{

    }
  }
  @-webkit-keyframes rotate_45 {
  from{

  }
  33%{
    transform : rotate3d(0,0,1,20deg);
  }
  66% {
    transform :rotate3d(0,0,1,-20deg);
  }
  to{

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

@keyframes air_top_move{
  from{
    position:absolute;
    left:100vw;
    top:35vw;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    left: 45vw;
    top: 15vh;
    opacity:0;
  }
}


@-webkit-keyframes air_top_move {
  from{
    position:absolute;
    left:100vw;
    top:35vw;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    left: 45vw;
    top: 15vh;
    opacity:0;
  }
}

@-webkit-keyframes air_top_move_path {
  from{
    position:absolute;
    left:100vw;
    top:32vw;
    opacity:1;
  }
  40%{
    opacity:1;
  }
  60% {
    opacity:0;
  }
  to{
    left: 48vw;
    top: 10vh;
    opacity:0;
  }
}

@keyframes air_top_move_path{
  from{
    position:absolute;
    left:100vw;
    top:32vw;
    opacity:1;
  }
  40%{
    opacity:1;
  }
  60% {
    opacity:0;
  }
  to{
    left: 48vw;
    top: 10vh;
    opacity:0;
  }
}
`;
