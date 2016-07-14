export function getWinSize() {
  var width = document.documentElement.clientWidth;
  var height = window.innerHeight;
  return {
		width: width,
    height: height
  };
}
