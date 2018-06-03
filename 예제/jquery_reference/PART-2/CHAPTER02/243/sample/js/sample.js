$(function(){
  // 아이콘 기능을 설정한다
  $("#mashroom").accordion({
    // 아이콘 설정
    icons : {
      // 헤더의 아이콘을 지정한다
      "header" : "ui-icon-folder-collapsed",
      // 활성 헤더의 아이콘을 지정한다
      "activeHeader" : "ui-icon-folder-open"
    }
  });
});