window.addEventListener("load", function(){
  var ele = document.getElementsByTagName("output")[0];
  var eImg = document.querySelectorAll("#photo1")[0]
  eImg.addEventListener("mousedown", function(){
    ele.innerText = ele.textContent = "마우스 다운 이벤트 발생";
    this.style.opacity = 0.5;
  });
  eImg.addEventListener("mouseup", function(){
    ele.innerText = ele.textContent = "마우스 업 이벤트 발생";
    this.style.opacity = 1.0;
  });
});
