$(function(){
  // input要素, button要素を取得する
  var ele = document.querySelectorAll("input[type=button],button");
  for(var i=0; i<ele.length; i++){
    // イベントを設定する
    ele[i].addEventListener("click", function(){
      // 버튼 ID를 읽는다
      var id = this.id;
      // 버튼 ID를 경고 메시지 창에 표시한다
      alert("클릭한 버튼 ID："+id);
    });
  }
});