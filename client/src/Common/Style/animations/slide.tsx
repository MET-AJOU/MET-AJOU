const SlideAnimations = `
.slide_up {
  position: relative;
  top: 0px;
  opacity: 1;
  transition: 1s;
}

.slide_down_relative {
  position:relative;
  top:200px!important;
  opacity:0;
  transition:1s;
}
.hide {
  opacity: 0;
  transition: 1s;
}
.slide_up_no_pos {
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
.slide_down_middle{
  position:absolute !important;
  top: 380vh !important; 
  opacity:0;
}
.slide_down_bottom {
  position:absolute !important;
  top: 450vh !important; 
  opacity:0;
}

.hide_up {
  position:relative;
  top:-10vh;
  opacity:0;
}

.scale_down{
  width: 0%!important;
}

.stand_left{
  position:relative;
  left:-45vw!important;
  top: -14vh!important;
  opacity:0;
}`;

export default SlideAnimations;
