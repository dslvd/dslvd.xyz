function bannershow() {
  document.getElementById("banner").style.visibility = "visible";
}
function bannerhide() {
  document.getElementById("banner").style.visibility = "hidden";
}
setTimeout("bannershow()",3000);
setTimeout("bannerhide()",20000);
