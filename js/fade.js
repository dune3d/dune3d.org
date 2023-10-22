window.onscroll = function() {
  var target = document.getElementById("logo");
  var height = window.innerHeight;
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  height = height / 10;
  target.style.opacity = (height - scrollTop) / height;
};