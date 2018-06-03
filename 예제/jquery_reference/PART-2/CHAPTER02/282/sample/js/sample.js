$(function(){
  // 스피너를 설치한다
  $("#orderNumber").spinner({
    // 생성시 무작위로 숫자를 설정한다
    create : function(evt, ui){
      // 0〜99까지 정수를 무작위로 생성
      $(this).val(Math.random()* 100 | 0);
    }
  });
  // 생성 버튼을 클릭하여 생성한 경우의 처리
  $("#create").click(function(){
    // input 요소를 생성하여 스피너를 설치한다
    $('<input>').appendTo("form").spinner({
      create : function(evt, ui){
        // 0〜9999까지의 정수를 무작위로 생성
        $(this).val(Math.random()* 10000 | 0);
      }
    });
  });
});