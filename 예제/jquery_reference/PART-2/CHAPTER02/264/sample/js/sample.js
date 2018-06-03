$(function(){
  // 대화상자를 생성한다
  $("#message").dialog({ autoOpen : false });
  // 버튼이 클릭되었을 때 처리
  $("#openDlg").click(function(){
    var flag = $("#message").dialog("isOpen");
    if (flag == true){
      alert("이미 대화상자가 열려있습니다");
      return;
    }
    // 대화상자를 표시한다
    $("#message").dialog("open");
    // 5초 경과하면 자동으로 닫는다
    setTimeout(function(){
      $("#message").dialog("close");
    }, 5*1000);
  })
});