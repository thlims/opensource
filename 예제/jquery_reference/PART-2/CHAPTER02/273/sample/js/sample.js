$(function(){
  // 생성 버튼을 클릭하여 생성한 경우의 처리
  $("#create").click(function(){
    // div 요소를 생성하여 프로그래 바를 설치한다
    $('<div></div>').appendTo("#allStatus").progressbar({
      value : (Math.random() * 50 | 0 )+ 10
    });
  });
  // 삭제 버튼을 클릭하여 생성한 경우의 처리
  $("#destroy").click(function(){
    // 프로그래스 바 수만큼 반복한다
    $("#allStatus div").each(function(idx, ele){
      // div 요소에도 프로그래스 바가 아닌 경우는 에러가 되므로 대처한다
      try{
        // 프로그래스 바를 삭제한다
        $(this).progressbar("destroy");
      }catch(e){ }
    });
  });
});