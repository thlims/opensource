$(function(){
  // 생성 버튼을 클릭한 경우의 처리
  $("#create").click(function(){
    // input 요소를 생성하여 스피너를 설치한다
    $('<input class="spnr" name="orderNumber" value="7">').appendTo("form").spinner();
  });
  // 삭제 버튼을 클릭한 경우의 처리
  $("#destrory").click(function(){
    // 스피너를 개별 처리한다
    $(".spnr").each(function(idx, ele){
      // 이미 스피너를 삭제한 경우는 오류가 되므로 try...catch로 처리한다
      try {
        // 스피너를 삭제한다
        $(this).spinner("destroy");
      }catch(e){}
    });
  });
});