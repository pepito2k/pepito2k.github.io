if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // dark mode
  colors = ["#000000","#0f0f0f","#262626","#424242","#696969","#8C8C8C","#ADADAD","#CDCDCD"];
} else {
  colors = ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#323232"];
}

const pattern = trianglify({
  width: window.innerWidth,
  height: window.innerHeight,
  xColors: colors
})

const m = new XMLSerializer().serializeToString(pattern.toSVG());
const k = window.btoa(m);
let element = document.getElementsByClassName('title')[0];
element = element || document.getElementsByTagName("main")[0];
element.style['background-image'] = 'url("data:image/svg+xml;base64,' + k + '")';
