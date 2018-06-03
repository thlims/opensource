$(function(){
  // 자동 완성 기능을 설정한다
  $("#devicetype").autocomplete({
    // 표시 목록을 설정한다
    source:[
      "iPhone", "iPad", "iPad mini",
      "Android", "안드로이드", "Nexus 7", "Nexus 10",
      "Windows Phone"
    ]
  });
});