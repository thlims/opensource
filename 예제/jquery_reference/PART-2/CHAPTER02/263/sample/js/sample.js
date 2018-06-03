$(function(){
  // 대화상자를 생성한다
  $("#message").dialog({
    // 자동으로 나타나지 않도록 설정한다
    autoOpen : false
  });
  // 버튼이 클릭되었을 때 처리
  $("#openDlg").click(function(){
    // 대화상자를 표시한다
    $("#message").dialog("open");
  })
});