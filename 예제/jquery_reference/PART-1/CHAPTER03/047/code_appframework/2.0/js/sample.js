$(function(){
  // 버튼에 click 이벤트를 할당한다
  $("#btn").click(function(){
    // 체크 박스를 지정한다
    $(":checkbox").each(function(){
      // 체크 박스의 체크를 해제한다
      $(this).attr("checked", false);
    });
  });
});