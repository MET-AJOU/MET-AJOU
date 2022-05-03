const AirAnimations = `
  @keyframes rotate_45 {
    from{

    }
    33%{
      transform : rotate3d(0,0,1,10deg);
    }
    66% {
      transform :rotate3d(0,0,1,-10deg);
    }
    to{

    }
  }
  @-webkit-keyframes rotate_45 {
  from{

  }
  33%{
    transform : rotate3d(0,0,1,10deg);
  }
  66% {
    transform :rotate3d(0,0,1,-10deg);
  }
  to{

  }
}

@keyframes air_top_move{
  from{
    position:absolute;
    left:100vw;
    top:45vh;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    left: 30vw;
    top: 10vh;
    opacity:0;
  }
}


@-webkit-keyframes air_top_move {
  from{
    position:absolute;
    left:100vw;
    top:45vh;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    left: 30vw;
    top: 10vh;
    opacity:0;
  }
}

@-webkit-keyframes air_top_move_path {
  from{
    position:absolute;
    left:100vw;
    top:45vh;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    left: 30vw;
    top: 10vh;
    opacity:0;
  }
}

@keyframes air_top_move_path{
  from{
    position:absolute;
    left:112vw;
    top:46vh;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    left: 40vw;
    top: 13vh;
    opacity:0;
  }
}

@keyframes air_middle_move{
  from{
    position:absolute;
    left:0vw;
    top:200vh;
    opacity:1;
  }
  90% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 100vw;
    top: 220vh;
    opacity:0;
  }
}


@-webkit-keyframes air_middle_move {
  from{
    position:absolute;
    left:0vw;
    top:200vh;
    opacity:1;
  }
  90% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 100vw;
    top: 220vh;
    opacity:0;
  }
}

@keyframes air_middle_move_path{
  from{
    position:absolute;
    left:-4vw;
    top:193vh;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 96vw;
    top: 213vh;
    opacity:0;
  }

}


@-webkit-keyframes air_middle_move_path {
  from{
    position:absolute;
    left:110vw;
    top:197vh;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 10vw;
    top: 217vh;
    opacity:0;
  }
}

@keyframes air_bottom_move{
  from{
    position:absolute;
    left:100vw;
    top:400vh;
    opacity:1;
  }
  90%{
    opacity:1;
  }
  to{
    position:absolute;
    left: -20vw;
    top: 470vh;
    opacity:0;
  }
}


@-webkit-keyframes air_bottom_move {
  from{
    position:absolute;
    left:100vw;
    top:400vh;
    opacity:1;
  }
  90% {
    opacity:1;
  }
  to{
    position:absolute;
    left: -5vw;
    top: 470vh;
    opacity:0;
  }
}

@keyframes air_bottom_move_path{
  from{
    position:absolute;
    left:110vw;
    top:390vh;
    opacity:1;
  }
  70% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 10vw;
    top: 460vh;
    opacity:0;
  }
}


@-webkit-keyframes air_bottom_move_path {
  from{
    position:absolute;
    left:110vw;
    top:390vh;
    opacity:1;
  }
  70% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 10vw;
    top: 460vh;
    opacity:0;
  }
}
`;

export default AirAnimations;
