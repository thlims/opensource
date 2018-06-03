$(function(){
  // jQuery UI의 선택 메뉴를 설치한다
  $("#mySelectMenu").selectmenu({
    // 이벤트 핸들러를 설정한다
    change : function(evt, ui){
      // 선택 항목(문자)을 읽는다
      var v = ui.item.value;
      // 선택 번호를 읽는다 
      var n = ui.item.index;
      // 선택 번호와 항목을 표시한다
      $("#result").text(n+" : "+v);
    }
  });
});