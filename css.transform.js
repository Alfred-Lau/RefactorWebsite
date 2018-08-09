module.exports = function cssTransform(css) {
  console.log(css);
  console.log(window.innerHeight, window.innerWidth);

  /* 
  记得调整完窗口之后刷新浏览器，样式才会生效
  */
  if (window.innerWidth >= 768) {
    return css.replace('yellow', 'green')
  } else {
    return css.replace('yellow', 'orange')
  }
}