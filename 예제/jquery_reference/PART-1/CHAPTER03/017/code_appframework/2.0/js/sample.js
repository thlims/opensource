$(function(){
  // ID 이름 pref의 선택 메뉴에 change 이벤트 설정
  $("#pref").change(function(){
    // 선택된 항목 이름 표시
    $("#result").text($("#pref option:selected").text());    
  });
});