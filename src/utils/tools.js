export function getWinSize() {
  var width = document.documentElement.clientWidth;
  var height = window.innerHeight;
  return {
		width: width,
    height: height
  };
}

export function disableScroll() {
  document.querySelector('html').style.overflow = 'hidden';
}

export function enableScroll() {
  document.querySelector('html').style.overflow = '';
}
