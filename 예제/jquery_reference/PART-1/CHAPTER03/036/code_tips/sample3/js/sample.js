window.addEventListener("load", function(){
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      var ele = document.querySelectorAll(":enabled");
      for(var i=0; i<ele.length; i++){
        // 텍스트 필드만 대상으로 한다
        if(ele[i].type === "text"){
          // 배경색을 주황색으로 표시한다
          ele[i].style.backgroundColor = "orange";
        }
      }
  });
});