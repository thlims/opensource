window.addEventListener("load", function(){
  document.querySelectorAll("#photo1")[0]
    .addEventListener("dblclick", function(){
      var ele = document.getElementsByTagName("output")[0];
      ele.innerText = ele.textContent = "더블클릭 이벤트 발생";
      this.style.opacity = 0.5;
  });
});
