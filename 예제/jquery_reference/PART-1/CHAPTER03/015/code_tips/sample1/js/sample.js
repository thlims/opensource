window.addEventListener("load", function(){
  var ele = document.querySelectorAll("#sale tbody td");
  for(var i=0; i<ele.length; i++){
    if(ele[i].innerHTML === ""){
      ele[i].innerHTML = "매출 데이터 없음";
    }
  }
});