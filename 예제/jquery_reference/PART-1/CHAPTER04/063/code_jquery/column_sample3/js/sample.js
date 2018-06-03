$(function(){
  // 첫 번째 버튼에 이벤트 할당
  $(":button:eq(0)").click(function(){
    // 텍스트 필드 내용 표시
    alert($("#aaa").val()+987);
  });
  // 두 번째 버튼에 이벤트 할당
  $(":button:eq(1)").click(function(){
    // 텍스트 필드 내용 설정
    $("input:text:first").val("OpenSpace");
  });
});