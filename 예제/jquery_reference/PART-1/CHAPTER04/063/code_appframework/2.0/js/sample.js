$(function(){
  // 첫 번째 버튼에 이벤트 할당
  $("#readContent").click(function(){
    // 텍스트 필드 내용 표시
    alert($("#myContent").val());
  });
  // 두 번째 버튼에 이벤트 할당
  $("#setContent").click(function(){
    // 텍스트 필드 내용 설정
    $("#myContent").val("OpenSpace");
  });
});